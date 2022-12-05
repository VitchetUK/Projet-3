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
  // return <div className="loading">Loading...</div>;

  return (
    <div>
      <Link to={`/contact/musicians/${musician._id}`}>Contact them</Link>
      <p>{musician.instruments}</p>
      <p>{musician.musicStyle}</p>
      <p>{musician.city}</p>
      <p>{musician.experience}</p>
      <p>{musician.description}</p>
    </div>
  );
  // return <pre>{JSON.stringify(musician, null, 2)}</pre>;
};

export default OneMusician;
