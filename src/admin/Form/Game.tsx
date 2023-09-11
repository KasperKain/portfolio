import "./form.css";
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingle, postData, updateData } from "../../services/api";
import convertImage from "../../utils/convertImage";

interface Values {
  title?: string;
  skills?: string;
  live?: string;
  github?: string;
  description?: string;
  image?: string;
}

const Game: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [values, setValues] = useState<Values>({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchSingle("games", id).then(setValues);
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
      const image = await convertImage(e);
      setValues({ ...values, image: image as string });
    } catch (err) {
      console.error("Error uploading image:", err);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const gameData = {
      title: values.title,
      live: values.live,
      github: values.github,
      description: values.description,
      skills: values.skills?.split(","),
      image: values.image,
    };

    if (id) {
      updateData("games", id, gameData).then(() => navigate("/admin"));
    } else {
      postData("games", gameData).then(() => navigate("/admin"));
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
          name='skills'
          placeholder='Skills (separate by comma)'
          value={values.skills || ""}
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

export default Game;
