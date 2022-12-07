import React, { useState, useEffect } from "react";
import service from "../../api/apiHandler";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import Card from "../Card/Card";

const AllBands = () => {
  const [bands, setBands] = useState(null);
  const [searchString, setSearchString] = useState("");
  const [citySearchString, setCitySearchString] = useState("");
  const [musicStyleString, setMusicStyleString] = useState("");
  console.log(bands);
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
        <div className="oneSearchBarDiv">
          <p>Search by instrument:</p>
          <Search {...{ searchString, setSearchString }} />
          <button className="searchBtn">
            <img src="public/icons8-search-50.png" alt="" />
          </button>
          {/* <a target="_blank" href="https://icons8.com/icon/132/search">Search</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> */}
        </div>
        <div className="oneSearchBarDiv">
          <p>Search by city:</p>
          <Search
            {...{
              searchString: citySearchString,
              setSearchString: setCitySearchString,
            }}
          />
          <button className="searchBtn">
            <img src="public/icons8-search-50.png" alt="" />
          </button>
        </div>
        <div className="oneSearchBarDiv">
          <p>Search by music style:</p>
          <Search
            {...{
              searchString: musicStyleString,
              setSearchString: setMusicStyleString,
            }}
          />
          <button className="searchBtn">
            <img src="public/icons8-search-50.png" alt="" />
          </button>
        </div>
      </div>
      <div className="allPostsDiv">
        {bands.map((element) => {
          return <Card {...element} />;
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
                <p>Music Style: {element.musicStyle}</p>
                <p>Searched Musician: {element.searchedMusician}</p>
                <p>City: {element.city}</p>
              </div>
            </div>
          ); */
          }
        })}
      </div>
    </>
  );
};

export default AllBands;
