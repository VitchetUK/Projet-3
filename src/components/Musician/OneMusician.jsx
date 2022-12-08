import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../api/apiHandler";
import { Link } from "react-router-dom";

const OneMusician = () => {
  const [musician, setMusician] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    service
      .get(`/api/musicians/${id}`)
      .then((response) => {
        setMusician(response.data);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  if (!musician)
    return (
      <div className="spinnerDiv">
        <div className="spinner"></div>
      </div>
    );

  return (
    <>
      <div className="oneBandId">
        <img className="oneBandImg" src={musician.user.picture} alt="" />

        <div className="oneBandDescription">
          <div>
            <h4>{musician.user.name} plays:</h4>
            <p>{musician.instruments}</p>
          </div>

          <div>
            <h4>The music {musician.user.name} is into:</h4>
            <p>{musician.musicStyle}</p>
          </div>

          <div>
            <h4>{musician.user.name}'s location:</h4>
            <p>{musician.city}</p>
          </div>

          <div>
            <h4>{musician.user.name}'s years of exerience:</h4>
            <p>{musician.experience}</p>
          </div>

          <div>
            <h4>Request's description:</h4> <p>{musician.description}</p>
          </div>

          <button className="updateProfileBtn">
            <Link
              className="updateProfileBtn"
              to={`/contact/musicians/${musician._id}`}
            >
              Contact {musician.user.name}
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default OneMusician;
