import React, { useState, useEffect } from "react";
import service from "../../api/apiHandler";
import { Link } from "react-router-dom";

const MyRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    service.getAllRequests().then((data) => {
      setRequests(data);
    });
  });
};

export default MyRequests;
