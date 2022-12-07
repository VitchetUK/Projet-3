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

  // Handle the "musician looking for a band" request

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const key in values) {
      if (values[key] === "") {
        return setError({ message: "All fields are required" });
      }
    }
    apiHandler
      .createMusician(values)
      .then(() => {
        navigate("/all-musicians");
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
          <label htmlFor="instruments">Instruments you are playing:</label>
          <input
            type="string"
            id="instruments"
            name="instruments"
            onChange={handleChange}
            value={values.instruments}
            placeholder="bass, ukulele..."
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
            placeholder="trap, classic..."
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
            placeholder="Tourcoing, Toulouse..."
          />
        </div>
        <div className="labelInput">
          <label htmlFor="experience">Experience (in years):</label>
          <input
            type="string"
            id="experience"
            name="experience"
            onChange={handleChange}
            value={values.experience}
            placeholder="1, 10, 50..."
          />
        </div>
        <div className="labelInput">
          <label htmlFor="description">Quick description:</label>
          <input
            type="string"
            id="description"
            name="description"
            onChange={handleChange}
            value={values.description}
            placeholder="Solo guitarist looking for a rock band..."
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
            placeholder="Often, casual player, professionnal player..."
          />
        </div>
        <button className="formBtn">Submit</button>
      </form>
    </div>
  );
};

export default FormMusician;
