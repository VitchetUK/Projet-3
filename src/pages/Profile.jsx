import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../api/apiHandler";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    service
      .getOneProfile()
      .then((response) => {
        console.log(response);
        setUser(response);
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
