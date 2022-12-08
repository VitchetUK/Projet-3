import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import service from "../../api/apiHandler";
import Card from "../Card/Card";
import Search from "../Search/Search";

const AllMusicians = () => {
  const [musicians, setMusicians] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [citySearchString, setCitySearchString] = useState("");
  const [musicStyleString, setMusicStyleString] = useState("");

  useEffect(() => {
    // Calling the query that we can use to filter in the search bar
    const query = `instruments=${searchString}&city=${citySearchString}&musicStyle=${musicStyleString}`;
    service.getAllMusicians(query).then((data) => {
      setMusicians(data);
    });
  }, [searchString, citySearchString, musicStyleString]);

  if (!musicians) {
    return (
      <div className="spinnerDiv">
        <div className="spinner"></div>
      </div>
    );
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
        {musicians.map((element) => {
          return <Card {...{ ...element, cardType: "" }} />;
        })}
      </div>
    </>
  );
};

export default AllMusicians;
