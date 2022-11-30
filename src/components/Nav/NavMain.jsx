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
            App name
          </NavLink>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <NavLink to="/profile">
                {currentUser && currentUser.email}
              </NavLink>
            </li>
            <button onClick={removeUser}>Log-Out</button>
            <li>
              <NavLink to="/allBand">AllBand</NavLink>
              <NavLink to="/allBand/create">AllBandForm</NavLink>
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
