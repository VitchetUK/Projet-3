import React, { useState, useEffect } from "react";
import service from "../../api/apiHandler";
import Search from "../Search/Search";
import Card from "../Card/Card";
import Spinner from "../Spinner";

const AllBands = () => {
  const [bands, setBands] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [citySearchString, setCitySearchString] = useState("");
  const [musicStyleString, setMusicStyleString] = useState("");

  useEffect(() => {
    // Calling the query that we can use to filter in the search bar
    const query = `searchedMusician=${searchString}&city=${citySearchString}&musicStyle=${musicStyleString}`;

    // Get all the bands requests from the db
    service.getAllBands(query).then((data) => {
      setBands(data);
    });
  }, [searchString, citySearchString, musicStyleString]);

  if (!bands) {
    return <Spinner />;
  }

  return (
    <>
      <div className="searchDiv">
        <div className="oneSearchBarDiv">
          <p>Search by instrument:</p>
          <Search {...{ searchString, setSearchString }} />
        </div>
        <div className="oneSearchBarDiv">
          <p>Search by city:</p>
          <Search
            {...{
              searchString: citySearchString,
              setSearchString: setCitySearchString,
            }}
          />
        </div>
        <div className="oneSearchBarDiv">
          <p>Search by music style:</p>
          <Search
            {...{
              searchString: musicStyleString,
              setSearchString: setMusicStyleString,
            }}
          />
        </div>
      </div>
      <div className="allPostsDiv">
        {bands.map((element) => {
          return <Card {...{ ...element, cardType: "" }} />;
        })}
      </div>
    </>
  );
};

export default AllBands;
