import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homePageBackground">
      <div className="homePageDiv">
        <div className="homePageLinksDivs">
          <button className="homePageBtn">
            <Link className="homePageLinks" to="/all-bands">
              LOOKING FOR A BAND?
            </Link>
          </button>
        </div>
        <div className="homePageLinksDivs">
          <button className="homePageBtn">
            <Link className="homePageLinks" to="/all-musicians">
              LOOKING FOR A MUSICIAN?
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
