import "./form.css";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingle, postData, updateData } from "../../services/api";
import convertImage from "../../utils/convertImage";

interface Values {
  title?: string;
  description?: string;
  image?: string;
  live?: string;
  github?: string;
}

const Toy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [values, setValues] = useState<Values>({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchSingle("toys", id).then(setValues);
    }
  }, [id]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const uploadImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    try {
      const image = await convertImage(e);
      setValues({ ...values, image: image as string });
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const toysData = {
      title: values.title,
      description: values.description,
      live: values.live,
      github: values.github,
      image: values.image,
    };
    console.log(toysData);

    if (id) {
      updateData("toys", id, toysData).then(() => navigate("/admin"));
    } else {
      postData("toys", toysData).then(() => navigate("/admin"));
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
        <input accept='image/*' type='file' onChange={uploadImage} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Toy;
