import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import apiHandler from "../../api/apiHandler";
import { useNavigate } from "react-router-dom";

const FormMusician = () => {
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
        <h2>Create a request</h2>
        <label htmlFor="instruments">instruments</label>
        <input
          type="string"
          id="instruments"
          name="instruments"
          onChange={handleChange}
          value={values.instruments}
        />
        <label htmlFor="musicStyle">musicStyle</label>
        <input
          type="string"
          id="musicStyle"
          name="musicStyle"
          onChange={handleChange}
          value={values.musicStyle}
        />
        <label htmlFor="city">city</label>
        <input
          type="string"
          id="city"
          name="city"
          onChange={handleChange}
          value={values.city}
        />
        <label htmlFor="experience">experience</label>
        <input
          type="string"
          id="experience"
          name="experience"
          onChange={handleChange}
          value={values.experience}
        />
        <label htmlFor="description">description</label>
        <input
          type="string"
          id="description"
          name="description"
          onChange={handleChange}
          value={values.description}
        />
        <label htmlFor="availability">availability</label>
        <input
          type="availability"
          id="availability"
          name="availability"
          onChange={handleChange}
          value={values.availability}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormMusician;
