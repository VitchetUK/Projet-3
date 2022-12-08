import React, { useState, useEffect } from "react";
import service from "../api/apiHandler";
import Card from "../components/Card/Card";
import Spinner from "../components/Spinner";

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
        <Spinner />
      </>
    );
  }

  return (
    <div className="allReq">
      <h2 className="h2Req">Bands requests</h2>
      <div className="allReqsDiv">
        {requests.bands.map((element) => {
          return (
            <div className="oneRequest" key={element._id}>
              <div>
                <Card {...{ ...element, cardType: "one-band/" }} />
              </div>
              <button
                className="deleteReqBtn"
                onClick={() =>
                  service.deleteRequest("bands", element._id).then(() => {
                    fetchReq();
                  })
                }
              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>
      <h2 className="h2Req">Musicians requests</h2>
      <div className="allReqsDiv">
        {requests.musicians.map((element) => {
          return (
            <div className="oneRequest" key={element._id}>
              <div>
                <Card {...{ ...element, cardType: "one-musician/" }} />
              </div>
              <button
                className="deleteReqBtn"
                onClick={() =>
                  service.deleteRequest("musicians", element._id).then(() => {
                    fetchReq();
                  })
                }
              >
                DELETE
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyRequests;
