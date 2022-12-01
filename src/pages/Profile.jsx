import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../api/apiHandler";

const Profile = () => {
  const [user, setUser] = useState(null);
  let { userId } = useParams;

  useEffect(() => {
    service
      .get(`/profile/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
      <div>{user.name}</div>
      <div>{user.email}</div>
    </>
  );
};

export default Profile;
