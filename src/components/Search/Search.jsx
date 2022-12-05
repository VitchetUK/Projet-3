import React from "react";

const Search = ({ searchString, setSearchString }) => {
  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      <div className="searchDiv">
        <p>Search</p>
        <input type="search" value={searchString} onChange={handleSearch} />
      </div>
    </>
  );
};

export default Search;
