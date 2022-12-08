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
          {/* <button className="searchBtn">
            <img src="public/icons8-search-50.png" alt="" />
          </button> */}
        </div>
        <div className="oneSearchBarDiv">
          <p>Search by city:</p>
          <Search
            {...{
              searchString: citySearchString,
              setSearchString: setCitySearchString,
            }}
          />
          {/* <button className="searchBtn">
            <img src="public/icons8-search-50.png" alt="" />
          </button> */}
        </div>
        <div className="oneSearchBarDiv">
          <p>Search by music style:</p>
          <Search
            {...{
              searchString: musicStyleString,
              setSearchString: setMusicStyleString,
            }}
          />
          {/* <button className="searchBtn">
            <img src="public/icons8-search-50.png" alt="" />
          </button> */}
        </div>
      </div>
      <div className="allPostsDiv">
        {musicians.map((element) => {
          return <Card {...{ ...element, cardType: "" }} />;
          {
            /* return (
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
                <p>Instruments: {element.instruments}</p>
                <p>Music Style: {element.musicStyle}</p>
                <p>City: {element.city}</p>
                <p>Experience: {element.experience}</p>
                <p>Availability: {element.availability}</p>
              </div>
            </div>
          ); */
          }
        })}
      </div>
    </>
  );
};

export default AllMusicians;
