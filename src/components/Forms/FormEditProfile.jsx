import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import apiHandler from "../../api/apiHandler";
import { useNavigate } from "react-router-dom";

const FormEditProfile = () => {
  const [values, handleChange] = useForm({
    name: "",
    username: "",
    email: "",
    phone: "",
    age: "",
    twitter: "",
    instagram: "",
    displayEmail: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    apiHandler
      .updateProfile(values)
      .then(() => {
        navigate("/profile");
      })
      .catch((e) => {
        setError(e.response.data);
      });
  };

  return (
    <>
      {error && <h3 className="error">{error.message}</h3>}
      <form onSubmit={handleSubmit}>
        <h2>Update your profile</h2>
        <label htmlFor="name">name</label>
        <input
          type="string"
          id="name"
          name="name"
          onChange={handleChange}
          value={values.name}
        />
        <label htmlFor="username">username</label>
        <input
          type="string"
          id="username"
          name="username"
          onChange={handleChange}
          value={values.username}
        />
        <label htmlFor="email">email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={values.email}
        />
        <label htmlFor="phone">phone</label>
        <input
          type="number"
          id="phone"
          name="phone"
          onChange={handleChange}
          value={values.phone}
        />
        <label htmlFor="age">age</label>
        <input
          type="number"
          id="age"
          name="age"
          onChange={handleChange}
          value={values.age}
        />
        <label htmlFor="twitter">twitter</label>
        <input
          type="string"
          id="twitter"
          name="twitter"
          onChange={handleChange}
          value={values.twitter}
        />
        <label htmlFor="instagram">instagram</label>
        <input
          type="string"
          id="instagram"
          name="instagram"
          onChange={handleChange}
          value={values.instagram}
        />
        <label htmlFor="displayEmail">displayEmail</label>
        <input
          type="email"
          id="displayEmail"
          name="displayEmail"
          onChange={handleChange}
          value={values.displayEmail}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default FormEditProfile;
