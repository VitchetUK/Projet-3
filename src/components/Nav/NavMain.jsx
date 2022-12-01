import { NavLink } from "react-router-dom";
import useAuth from "../../auth/useAuth";
import "../../styles/NavMain.css";

const NavMain = () => {
  const { isLoggedIn, currentUser, removeUser } = useAuth();
  return (
    <nav className="NavMain stroke">
      <ul className="ulNav">
        <li>
          <NavLink className="logo" to="/">
            muSeek
          </NavLink>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <NavLink to="/profile">
                Hi {currentUser && currentUser.name}
              </NavLink>
            </li>
            <button className="logoutBtn" onClick={removeUser}>
              Log-Out
            </button>
            <li>
              <NavLink to="/allBands">All Bands</NavLink>
            </li>
            <li>
              <NavLink to="/allBands/create">All Bands Form</NavLink>
            </li>
            <li>
              <NavLink to="/allMusicians">all Musicians</NavLink>
            </li>
            <li>
              <NavLink to="/allMusicians/create">all Musicians Form</NavLink>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/signin">Log in</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default NavMain;
