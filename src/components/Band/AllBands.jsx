import React, { useState, useEffect } from "react";
import service from "../../api/apiHandler";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const AllBands = () => {
  const [bands, setBands] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [citySearchString, setCitySearchString] = useState("");
  const [musicStyleString, setMusicStyleString] = useState("");

  useEffect(() => {
    // Calling the query used to filter in the search bar

    const query = `searchedMusician=${searchString}&city=${citySearchString}&musicStyle=${musicStyleString}`;

    // Get all the bands requests from the db
    service.getAllBands(query).then((data) => {
      setBands(data);
    });
  }, [searchString, citySearchString, musicStyleString]);

  if (!bands) {
    return (
      <div className="spinnerDiv">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="searchDiv">
        <p>instrument</p>
        <Search {...{ searchString, setSearchString }} />
        <p>city</p>
        <Search
          {...{
            searchString: citySearchString,
            setSearchString: setCitySearchString,
          }}
        />
        <p>music style</p>
        <Search
          {...{
            searchString: musicStyleString,
            setSearchString: setMusicStyleString,
          }}
        />
      </div>
      <div className="allPostsDiv">
        {bands.map((element) => {
          return (
            <div className="onePostDiv" key={element._id}>
              <div className="imgLinkDiv">
                <Link to={`${element._id}`}>
                  <img
                    className="profilePic"
                    src={element.user.picture}
                    alt=""
                  />
                </Link>
              </div>
              <p className="onePostName">{element.user.name}</p>
              <div className="onePostInfo">
                <p>musicStyle: {element.musicStyle}</p>
                <p>searchedMusician: {element.searchedMusician}</p>
                <p>city: {element.city}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllBands;
