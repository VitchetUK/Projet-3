import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
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
      <div>
        <img className="profilePic" src={user.picture} alt="" />
      </div>
      <ul>
        <li>{user.name}</li>
        <li>{user.username}</li>
        <li>{user.phone}</li>
        <li>{user.age}</li>
        <li>{user.twitter}</li>
        <li>{user.instagram}</li>
        <li>{user.displayEmail}</li>
      </ul>

      <NavLink to="/profile/edit">Edit</NavLink>
    </>
  );
};

export default Profile;
