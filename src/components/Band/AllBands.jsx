import React, { useState, useEffect } from "react";
import service from "../../api/apiHandler";
import { Link } from "react-router-dom";

const AllBands = () => {
  const [bands, setBands] = useState([]);

  useEffect(() => {
    service.getAllBands().then((data) => {
      setBands(data);
    });
  }, []);

  if (!bands.length) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <ul>
      {bands.map((element) => {
        return (
          <li key={element._id}>
            <Link to={`${element._id}`}>clique ici</Link>
            <p>Music Style: {element.musicStyle}</p>
            <p>Looking for: {element.searchedMusician}</p>
            <p>City: {element.city}</p>
            <p>Description: {element.description}</p>
            <p>=====================NEXT===================</p>
          </li>
        );
      })}
    </ul>
  );
};

export default AllBands;
