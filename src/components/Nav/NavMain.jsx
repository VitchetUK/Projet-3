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
            <img className="logoImg" src="/logo-museek.png" alt="" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/all-bands">Bands</NavLink>
        </li>
        <li>
          <NavLink to="/all-musicians">Musicians</NavLink>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <NavLink to="/all-bands/create">Bands Form</NavLink>
            </li>
            <li>
              <NavLink to="/all-musicians/create">Musicians Form</NavLink>
            </li>
            <li>
              <NavLink to="/my-requests">My requests</NavLink>
            </li>
            <li>
              <NavLink to="/profile">My profile</NavLink>
            </li>
            <button className="logoutBtn" onClick={removeUser}>
              Log-Out
            </button>
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
