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

  // Handle the band looking for musicians request

  const handleSubmit = (e) => {
    e.preventDefault();
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
            Searched Musician:
          </label>
          <input
            className="formInput"
            type="string"
            id="searchedMusician"
            name="searchedMusician"
            onChange={handleChange}
            value={values.searchedMusician}
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
          />
        </div>
        <div className="labelInput">
          <label htmlFor="description">Description:</label>
          <input
            className="formInput"
            type="string"
            id="description"
            name="description"
            onChange={handleChange}
            value={values.description}
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
          />
        </div>
        <button className="formBtn">Submit</button>
      </form>
    </div>
  );
};

export default FormBand;
