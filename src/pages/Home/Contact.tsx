import React, { useState } from "react";
import emailjs from "emailjs-com";
import TitleBar from "../../components/TitleBar/TitleBar";
import Button from "../../components/Button/Button";
import SectionContainer from "../../components/SectionContainer/SectionContainer";
import BaseBox from "../../components/BaseBox/BaseBox";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(() => {
        alert("Message sent!");
      })
      .catch((error) => {
        console.error("Error Details:", error);
        alert(
          "There was an error sending the message. Check console for details."
        );
      });
  };

  return (
    <SectionContainer titleBar={<TitleBar text='Send an email' />}>
      <BaseBox>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <label>Name:</label>
          <input
            style={{ width: "100%", color: "black" }}
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <label>Email:</label>
          <input
            style={{ width: "100%", color: "black" }}
            type='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <label>Message:</label>
          <textarea
            style={{ width: "100%", color: "black" }}
            name='message'
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
          <Button title='Send Message' />
        </form>
      </BaseBox>
    </SectionContainer>
  );
};

export default Contact;
