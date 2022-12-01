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
      <input type="email" id="email" name="email" value={user.email} />
      <label htmlFor="username">username</label>
      <input
        type="string"
        id="username"
        name="username"
        value={user.username}
      />
    </>
  );
};

export default Profile;
