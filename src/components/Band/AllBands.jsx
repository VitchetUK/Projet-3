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
    // return <div className="loading">Loading...</div>;
    return (
      <div className="spinnerDiv">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="searchDiv"></div>
      <div className="allPostsDiv">
        {bands
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
                  <p>genre: {element.musicStyle}</p>
                  <p>looking for: {element.searchedMusician}</p>
                  <p>location: {element.city}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default AllBands;
