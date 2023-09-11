import "./form.css";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingle, postData, updateData } from "../../services/api";
import convertImage from "../../utils/convertImage";

interface Values {
  title?: string;
  description?: string;
  live?: string;
  github?: string;
  image1?: string;
  image2?: string;
}

const Page: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [values, setValues] = useState<Values>({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchSingle("pages", id).then(setValues);
    }
  }, [id]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    try {
      console.log(e.target.name);
      console.log(e.target.files);
      const image = await convertImage(e);
      setValues({ ...values, [e.target.name]: image });
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const pageData = {
      title: values.title,
      live: values.live,
      github: values.github,
      description: values.description,
      image1: values.image1,
      image2: values.image2,
    };

    if (id) {
      updateData("pages", id, pageData).then(() => navigate("/admin"));
    } else {
      postData("pages", pageData).then(() => navigate("/admin"));
    }
  };

  return (
    <div className='FormContainer'>
      <form onSubmit={handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='Title'
          value={values.title || ""}
          onChange={handleChange}
        />
        <input
          name='live'
          type='text'
          placeholder='Live Link'
          value={values.live || ""}
          onChange={handleChange}
        />
        <input
          name='github'
          type='text'
          placeholder='Source Link'
          value={values.github || ""}
          onChange={handleChange}
        />
        <textarea
          name='description'
          placeholder='Description'
          value={values.description || ""}
          onChange={handleChange}
        />
        <input
          accept='image/*'
          type='file'
          name='image1'
          onChange={uploadImage}
        />
        <input
          accept='image/*'
          type='file'
          name='image2'
          onChange={uploadImage}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Page;
