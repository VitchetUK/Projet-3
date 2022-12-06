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
    // Calling the query used to filter in the search bar
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
        {/* //////ALT WAY TO DO THE SEARCH FILTER, CAN'T FILTER MULTIPLE FIELDS/////
        
         .filter((musicians) =>
            musicians.instruments
              .toLowerCase()
              .includes(searchString.toLowerCase())
          ) */}
        {musicians.map((element) => {
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
