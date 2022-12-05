import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <body className="homePageBackground">
      <div className="homePageDiv">
        <div className="homePageLinksDivs">
          <button className="formBtn">
            <Link className="homePageLinks" to="/allBands">
              Looking for a band?
            </Link>
          </button>
        </div>
        <div className="homePageLinksDivs">
          <button className="formBtn">
            <Link className="homePageLinks" to="/allMusicians">
              Looking for a musician?
            </Link>
          </button>
        </div>
      </div>
    </body>
  );
};

export default Home;
