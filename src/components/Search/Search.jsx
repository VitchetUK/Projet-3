import React from "react";

const Search = ({ searchString, setSearchString }) => {
  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      <input type="search" value={searchString} onChange={handleSearch} />
    </>
  );
};

export default Search;
