import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homePageBackground">
      <div className="homePageDiv">
        <div className="homePageLinksDivs">
          <button className="homePageBtn">
            <Link className="homePageLinks" to="/all-bands">
              Looking for a band?
            </Link>
          </button>
        </div>
        <div className="homePageLinksDivs">
          <button className="homePageBtn">
            <Link className="homePageLinks" to="/all-musicians">
              Looking for a musician?
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
