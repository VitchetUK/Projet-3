import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import service from "../../api/apiHandler";
import Spinner from "../Spinner";

const OneBand = () => {
  const [band, setBand] = useState(null);
  const { id } = useParams();

  // Get one requests from the db

  useEffect(() => {
    service
      .get(`/api/bands/${id}`)
      .then((response) => {
        setBand(response.data);
      })
      .catch((e) => {
        console.error(e.message);
      });
  }, []);

  if (!band) return <Spinner />;

  return (
    <>
      <div className="oneBandId">
        <img className="oneBandImg" src={band.user.picture} alt="" />

        <div className="oneBandDescription">
          <div>
            <h4>{band.user.name} is looking for:</h4>
            <p>{band.searchedMusician}</p>
          </div>

          <div>
            <h4>The music they're into:</h4>
            <p>{band.musicStyle}</p>
          </div>

          <div>
            <h4>Where they meet to rehearse:</h4>
            <p>{band.city}</p>
          </div>

          <div>
            <h4>Request's description:</h4> <p>{band.description}</p>
          </div>

          <p>{band.availability}</p>
          <button className="updateProfileBtn">
            <Link
              className="updateProfileBtn"
              to={`/contact/bands/${band._id}`}
            >
              Contact {band.user.name}
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default OneBand;
