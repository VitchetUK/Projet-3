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
    // return <div className="loading">Loading...</div>;
    return (
      <div className="spinnerDiv">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <body className="profilePageBackground">
      <div className="profilePageDiv">
        <div className="profilePicPageDiv">
          <img className="profilePicPage" src={user.picture} alt="" />
        </div>
        <div className="profileInfo">
          <ul>
            <li>{user.name}</li>
            <li>{user.username}</li>
            <li>{user.phone}</li>
            <li>{user.age}</li>
            <li>{user.twitter}</li>
            <li>{user.instagram}</li>
            <li>{user.displayEmail}</li>
          </ul>
        </div>
      </div>
      <div className="profileEditDiv">
        <NavLink className="formBtnEdit" to="/profile/edit">
          Edit
        </NavLink>
      </div>
    </body>
  );
};

export default Profile;
