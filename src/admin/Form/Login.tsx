import "./form.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { login } from "../../services/api";
import { useNavigate } from "react-router-dom";

interface Values {
  username: string;
  password: string;
}
const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState<Values>({ username: "", password: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const userData = {
        username: values.username,
        password: values.password,
      };
      const response = await login(userData);
      if (response.token) {
        localStorage.setItem("token", response.token);
        navigate("/admin");
      } else {
        // TODO: Handle login errors. Maybe set an error state and display it.
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <div className='FormContainer'>
      <form onSubmit={handleSubmit}>
        <input
          name='username'
          type='text'
          placeholder='Username'
          value={values.username || ""}
          onChange={handleChange}
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={values.password || ""}
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
