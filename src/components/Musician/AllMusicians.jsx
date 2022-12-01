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
    <>
      <div className="searchDiv"></div>
      <div className="allPostsDiv">
        {musicians.map((element) => {
          return (
            <div className="onePostDiv" key={element._id}>
              <Link to={`${element._id}`}>clique</Link>
              <p>{element.instruments}</p>
              <p>{element.musicStyle}</p>
              <p>{element.city}</p>
              <p>{element.experience}</p>
              <p>{element.availability}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllMusicians;
