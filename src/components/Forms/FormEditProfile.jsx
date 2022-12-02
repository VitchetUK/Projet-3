import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import apiHandler from "../../api/apiHandler";
import { useNavigate } from "react-router-dom";
import useAuth from "../../auth/useAuth";

const FormEditProfile = () => {
  const { currentUser, authenticateUser } = useAuth();
  console.log(currentUser);
  const [values, handleChange] = useForm({
    name: currentUser.name,
    username: currentUser.username,
    phone: currentUser.phone,
    age: currentUser.age,
    twitter: currentUser.twitter,
    instagram: currentUser.instagram,
    displayEmail: currentUser.displayEmail,
    picture: currentUser.picture,
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData();
    // fd.append("name", values.name);
    // fd.append("username", values.username);
    // fd.append("phone", values.phone);
    // fd.append("age", values.age);
    // fd.append("twitter", values.twitter);
    // fd.append("instagram", values.instagram);
    // fd.append("displayEmail", values.displayEmail);
    // fd.append("picture", values.picture);

    // for (const key in values) {
    //   fd.apppend(key, values[key]);
    // }

    for (const key in values) {
      fd.append(key, values[key]);

      if (values[key] === "") {
        return setError({ message: "All fields are required" });
      }
    }

    apiHandler
      .updateProfile(values)
      .then(async () => {
        await authenticateUser();
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
        <label htmlFor="picture">Picture</label>
        <input
          type="file"
          id="picture"
          name="picture"
          // value={picture.name || ""}
          onChange={handleChange}
          //   value={values.picture || ""}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default FormEditProfile;
