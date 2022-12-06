import React, { useState, useEffect } from "react";
import service from "../../api/apiHandler";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const AllBands = () => {
  const [bands, setBands] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [citySearchString, setCitySearchString] = useState("");
  const [musicStyleString, setMusicStyleString] = useState("");
  console.log(bands);
  useEffect(() => {
    const query = `searchedMusician=${searchString}&city=${citySearchString}&musicStyle=${musicStyleString}`;
    service.getAllBands(query).then((data) => {
      setBands(data);
    });
  }, [searchString, citySearchString, musicStyleString]);

  if (!bands) {
    // return <div className="loading">Loading...</div>;
    return (
      <div className="spinnerDiv">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <>
      <div className="searchDiv">
        <p>Search band zone</p>
        <Search {...{ searchString, setSearchString }} />
        <Search
          {...{
            searchString: citySearchString,
            setSearchString: setCitySearchString,
          }}
        />
        <Search
          {...{
            searchString: musicStyleString,
            setSearchString: setMusicStyleString,
          }}
        />
      </div>
      <div className="allPostsDiv">
        {/* .filter((bands) =>
            bands.searchedMusician
              .toLowerCase()
              .includes(searchString.toLowerCase())
          ) */}
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
