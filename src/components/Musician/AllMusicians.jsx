import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import service from "../../api/apiHandler";
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
        <p>instruments</p>
        <Search {...{ searchString, setSearchString }} />
        <p>city</p>
        <Search
          {...{
            searchString: citySearchString,
            setSearchString: setCitySearchString,
          }}
        />
        <p>musicStyle</p>
        <Search
          {...{
            searchString: musicStyleString,
            setSearchString: setMusicStyleString,
          }}
        />
      </div>
      <div className="allPostsDiv">
        {musicians.map((element) => {
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
                <p>instruments: {element.instruments}</p>
                <p>musicStyle: {element.musicStyle}</p>
                <p>city: {element.city}</p>
                <p>experience: {element.experience}</p>
                <p>availability: {element.availability}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllMusicians;
