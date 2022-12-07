import React, { useState, useEffect } from "react";
import service from "../api/apiHandler";
import { Link } from "react-router-dom";
import Card from "../components/Card/Card";

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
      <h2>Bands requests</h2>
      <div>
        {requests.bands.map((element) => {
          return (
            <div className="oneRequest">
              <div key={element._id}>
                <Card {...{ ...element, cardType: "one-band/" }} />
              </div>
              <button
                onClick={() =>
                  service.deleteRequest("bands", element._id).then(() => {
                    fetchReq();
                  })
                }
              >
                CLICK HERE TO DELETE
              </button>
            </div>
          );
        })}
      </div>
      <h2>Musicians requests</h2>
      <div>
        {requests.musicians.map((element) => {
          return (
            <div className="oneRequest">
              <div key={element._id}>
                <Card {...{ ...element, cardType: "one-musician/" }} />
              </div>
              <button
                onClick={() =>
                  service.deleteRequest("musicians", element._id).then(() => {
                    fetchReq();
                  })
                }
              >
                CLICK HERE TO DELETE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyRequests;
