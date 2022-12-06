import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import apiHandler from "../../api/apiHandler";
import { useNavigate } from "react-router-dom";

const FormMusician = () => {
  // Set value form to empty string

  const [values, handleChange] = useForm({
    instruments: "",
    musicStyle: "",
    city: "",
    experience: "",
    description: "",
    availability: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Handle the musician looking for a band request

  const handleSubmit = (e) => {
    e.preventDefault();
    apiHandler
      .createMusician(values)
      .then(() => {
        navigate("/allMusicians");
      })
      .catch((e) => {
        console.log(e);
        setError(e);
      });
  };

  return (
    <div className="container">
      {error && <h3 className="error">{error.message}</h3>}
      <form className="form" onSubmit={handleSubmit}>
        <h2>Looking for a band to join? Create a request!</h2>
        <div className="labelInput">
          <label htmlFor="instruments">Instruments:</label>
          <input
            type="string"
            id="instruments"
            name="instruments"
            onChange={handleChange}
            value={values.instruments}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="musicStyle">Music Style:</label>
          <input
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
            type="string"
            id="city"
            name="city"
            onChange={handleChange}
            value={values.city}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="experience">Experience:</label>
          <input
            type="string"
            id="experience"
            name="experience"
            onChange={handleChange}
            value={values.experience}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="description">Description:</label>
          <input
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

export default FormMusician;
