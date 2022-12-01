import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../api/apiHandler";

const OneBand = () => {
  const [band, setBand] = useState(null);
  const { id } = useParams();

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

  if (!band) return <div className="loading">Loading...</div>;

  // return <pre>{JSON.stringify(band, null, 2)}</pre>;
  return (
    <>
      <div className="searchDiv"></div>
      <div className="oneBandId">
        {/* <p>{band.name} is loking for:</p> */}
        <p>{band.searchedMusician}</p>
        <p>{band.musicStyle}</p>
        <p>{band.city}</p>
        <p>{band.description}</p>
        <p>{band.availability}</p>
      </div>
    </>
  );
};

export default OneBand;
