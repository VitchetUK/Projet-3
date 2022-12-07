import React, { useState, useEffect } from "react";
import service from "../api/apiHandler";
import { Link } from "react-router-dom";

const MyRequests = () => {
  const [requests, setRequests] = useState({});
  const fetchReq = () => {
    service.getAllRequests().then((data) => {
      setRequests(data);
    });
  };
  useEffect(() => {
    fetchReq();
  }, []);

  if (Object.entries(requests).length === 0) {
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
            <div key={element._id} className="onePostDiv">
              <div className="imgLinkDiv">
                <button
                  onClick={() =>
                    service.deleteRequest("musicians", element._id).then(() => {
                      fetchReq();
                    })
                  }
                >
                  CLICK HERE TO DELETE
                </button>
                <Link to={`one-musician/${element._id}`}>
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
      <h2>Bands requests</h2>
      <div>
        {requests.bands.map((element) => {
          return (
            <div key={element._id} className="onePostDiv">
              <button
                onClick={() =>
                  service.deleteRequest("bands", element._id).then(() => {
                    fetchReq();
                  })
                }
              >
                CLICK HERE TO DELETE
              </button>
              <div className="imgLinkDiv">
                <Link to={`one-band/${element._id}`}>
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
