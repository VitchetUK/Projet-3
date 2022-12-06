import React, { useState, useEffect } from "react";
import service from "../api/apiHandler";
import { Link } from "react-router-dom";

const MyRequests = () => {
  const [requests, setRequests] = useState({});

  useEffect(() => {
    service.getAllRequests().then((data) => {
      setRequests(data);
      // console.log(data);
    });
  }, []);

  if (Object.entries(requests).length === 0) {
    // return <div className="loading">Loading...</div>;
    return (
      <>
        <div>no requests here</div>
        <div className="spinnerDiv">
          <div className="spinner"></div>
        </div>
      </>
    );
  }

  return (
    <div>
      <h2>Musicians requests</h2>
      <div>
        {requests.musicians.map((element) => {
          return (
            <React.Fragment key={element._id}>
              <div className="onePostDiv">
                <div className="imgLinkDiv">
                  <Link to={`oneMusician/${element._id}`}>
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
            </React.Fragment>
          );
        })}
      </div>
      <h2>Bands requests</h2>
      <div>
        {requests.bands.map((element) => {
          return (
            <div key={element._id} className="onePostDiv">
              <div className="imgLinkDiv">
                <Link to={`oneBand/${element._id}`}>
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
    </div>
  );
};

export default MyRequests;
