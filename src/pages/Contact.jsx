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

  if (!contact) return <div className="loading">loading...</div>;
  return (
    <>
      <div>
        <img src={contact.user.picture} alt="" />
      </div>
      <ul>
        <li>{contact.user.name}</li>
        <li>{contact.user.username}</li>
        <li>{contact.user.phone}</li>
        <li>{contact.user.age}</li>
        <li>
          twitter:{" "}
          <a href={`https://twitter.com/${contact.user.twitter}`}>
            @{contact.user.twitter}
          </a>
        </li>
        <li>
          instagram:{" "}
          <a href={`https://www.instagram.com/${contact.user.instagram}`}>
            @{contact.user.instagram}
          </a>
        </li>
        <li>{contact.user.displayEmail}</li>
      </ul>
    </>
  );
};

export default Contact;
