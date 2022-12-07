import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import apiHandler from "../../api/apiHandler";
import { useNavigate } from "react-router-dom";

const FormBand = () => {
  // Set value form to empty string

  const [values, handleChange] = useForm({
    searchedMusician: "",
    musicStyle: "",
    city: "",
    description: "",
    availability: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle the "band looking for musicians" request

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const key in values) {
      if (values[key] === "") {
        return setError({ message: "All fields are required" });
      }
    }
    apiHandler
      .createBand(values)
      .then(() => {
        navigate("/all-bands");
      })
      .catch((e) => {
        setError(e.response.data);
      });
  };

  return (
    <div className="container">
      {error && <h3 className="error">{error.message}</h3>}
      <form className="form" onSubmit={handleSubmit}>
        <h2>Your band needs a new member? Create a request!</h2>

        <div className="labelInput">
          <label className="formInput" htmlFor="searchedMusician">
            Looking for:
          </label>
          <input
            className="formInput"
            type="string"
            id="searchedMusician"
            name="searchedMusician"
            onChange={handleChange}
            value={values.searchedMusician}
            placeholder="guitarist, pianist..."
          />
        </div>
        <div className="labelInput">
          <label htmlFor="musicStyle">Music Style:</label>
          <input
            className="formInput"
            type="string"
            id="musicStyle"
            name="musicStyle"
            onChange={handleChange}
            value={values.musicStyle}
            placeholder="jazz, rock, indie rap..."
          />
        </div>
        <div className="labelInput">
          <label htmlFor="city">City:</label>
          <input
            className="formInput"
            type="string"
            id="city"
            name="city"
            onChange={handleChange}
            value={values.city}
            placeholder="Paris, Marseille, Bordeaux..."
          />
        </div>
        <div className="labelInput">
          <label htmlFor="description">Short description:</label>
          <input
            className="formInput"
            type="string"
            id="description"
            name="description"
            onChange={handleChange}
            value={values.description}
            placeholder="Hello! We're a group of 4 looking for..."
          />
        </div>
        <div className="labelInput">
          <label htmlFor="availability">Availability:</label>
          <input
            className="formInput"
            type="availability"
            id="availability"
            name="availability"
            onChange={handleChange}
            value={values.availability}
            placeholder="Playing on the sunday, practicing every afternoon..."
          />
        </div>
        <button className="formBtn">Submit</button>
      </form>
    </div>
  );
};

export default FormBand;
