import React, { useState, useEffect } from "react";
import service from "../api/apiHandler";

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
              <div>
                <p>id: {element._id}</p>
                <p>{element.city}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <h2>Bands requests</h2>
      <div>
        {requests.bands.map((element) => {
          return (
            <React.Fragment key={element._id}>
              <div>
                <p>id: {element._id}</p>
                <p>{element.city}</p>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default MyRequests;
