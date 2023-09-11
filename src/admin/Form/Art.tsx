import "./form.css";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingle, postData, updateData } from "../../services/api";
import convertImage from "../../utils/convertImage";
interface Values {
  title?: string;
  image?: string;
}

const Art: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [values, setValues] = useState<Values>({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchSingle("art", id).then(setValues);
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
    const artData = { ...values };

    if (id) {
      updateData("art", id, artData).then(() => navigate("/admin"));
    } else {
      postData("art", artData).then(() => navigate("/admin"));
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
        <input accept='image/*' type='file' onChange={uploadImage} />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Art;
