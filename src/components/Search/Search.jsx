import React from "react";

const Search = ({ searchString, setSearchString }) => {
  const handleSearch = (e) => {
    setSearchString(e.target.value);
  };

  return (
    <>
      <input
        className="searchBarInput"
        type="search"
        value={searchString}
        onChange={handleSearch}
      />
    </>
  );
};

export default Search;
