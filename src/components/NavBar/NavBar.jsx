import { Link, useLocation } from "react-router";
import "./NavBar.css";

function NavBar() {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="navbar">
        <Link to="/">
          <button
            className={`navbar__button ${
              isActive("/")
                ? "navbar__button_active navbar__button_active-home"
                : ""
            }`}
          >
            Home
          </button>
        </Link>
        <Link to="/about">
          <button
            className={`navbar__button ${
              isActive("/about") ? "navbar__button_active" : ""
            }`}
          >
            About
          </button>
        </Link>
        <Link to="/leaderboards">
          <button
            className={`navbar__button ${
              isActive("/leaderboards") ? "navbar__button_active" : ""
            }`}
          >
            Leaderboards
          </button>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
