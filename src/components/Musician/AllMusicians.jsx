import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import service from "../../api/apiHandler";

const AllMusicians = () => {
  const [musicians, setMusicians] = useState([]);

  useEffect(() => {
    service.getAllMusicians().then((data) => {
      setMusicians(data);
    });
  }, []);

  if (!musicians.length) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <ul>
      {musicians.map((element) => {
        return (
          <li key={element._id}>
            <Link to={`${element._id}`}>clique</Link>
            <p>{element.instruments}</p>
            <p>{element.musicStyle}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default AllMusicians;
