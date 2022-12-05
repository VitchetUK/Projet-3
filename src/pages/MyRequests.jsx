import React, { useState, useEffect } from "react";
import service from "../api/apiHandler";

const MyRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    service.getAllRequests().then((data) => {
      setRequests(data);
      console.log(data);
    });
  }, []);

  if (!requests.length) {
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
      {requests.map((element) => {
        return (
          <>
            <div key={element._id}></div>
            <div>
              <p>id: {element._id}</p>
              <p>============</p>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MyRequests;
