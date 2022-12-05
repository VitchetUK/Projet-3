import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import service from "../api/apiHandler";

const Contact = () => {
  const [contact, setContact] = useState(null);
  const { id, category } = useParams();

  useEffect(() => {
    service
      .get(`/api/${category}/${id}`)
      .then((response) => {
        setContact(response.data);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  if (!contact)
    return (
      <div className="spinnerDiv">
        <div className="spinner"></div>
      </div>
    );
  // return <div className="loading">loading...</div>;
  return (
    <div>
      <p>{contact.user.email}</p>
      <p>{contact.user.name}</p>
    </div>
  );
};

export default Contact;
