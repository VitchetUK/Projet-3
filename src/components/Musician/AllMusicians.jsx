import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import service from "../../api/apiHandler";
import Search from "../Search/Search";

const AllMusicians = () => {
  const [musicians, setMusicians] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    service.getAllMusicians().then((data) => {
      setMusicians(data);
    });
  }, []);

  if (!musicians.length) {
    return (
      <div className="spinnerDiv">
        <div className="spinner"></div>
      </div>
    );
    // return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <div className="searchDiv">
        <Search {...{ searchString, setSearchString }} />
      </div>
      <div className="allPostsDiv">
        {musicians
          .filter((musicians) =>
            musicians.instruments
              .toLowerCase()
              .includes(searchString.toLowerCase())
          )
          .map((element) => {
            return (
              <div className="onePostDiv" key={element._id}>
                <div className="imgLinkDiv">
                  <Link to={`${element._id}`}>
                    <img
                      className="profilePic"
                      src={element.user.picture}
                      alt=""
                    />
                  </Link>
                </div>
                <p className="onePostName">{element.user.name}</p>
                <div className="onePostInfo">
                  <p>instruments: {element.instruments}</p>
                  <p>genre: {element.musicStyle}</p>
                  <p>location: {element.city}</p>
                  <p>experience: {element.experience}</p>
                  <p>availability: {element.availability}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default AllMusicians;
