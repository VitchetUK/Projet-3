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
            <button class="logoutBtn" onClick={removeUser}>
              Log-Out
            </button>
            <li>
              <NavLink to="/allBands">AllBand</NavLink>
              <NavLink to="/allBands/create">AllBandForm</NavLink>
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
