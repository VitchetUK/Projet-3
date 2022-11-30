import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import apiHandler from "../../api/apiHandler";
import { useNavigate } from "react-router-dom";

const FormBand = () => {
  const [values, handleChange] = useForm({
    searchedMusician: "",
    musicStyle: "",
    city: "",
    description: "",
    availability: "",
    isArchived: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    apiHandler
      .createBand(values)
      .then(() => {
        navigate("allBand");
      })
      .catch((e) => {
        setError(e.response.data);
      });
  };

  return (
    <>
      {error && <h3 className="error">{error.message}</h3>}
      <form onSubmit={handleSubmit}>
        <h2>Create a request for your band</h2>
        <label htmlFor="searchedMusician">searchedMusician</label>
        <input
          type="string"
          id="searchedMusician"
          name="searchedMusician"
          onChange={handleChange}
          value={values.searchedMusician}
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
    </>
  );
};

export default FormBand;
