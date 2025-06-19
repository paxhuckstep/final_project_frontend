import { useLocation, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar({ isScoreZero, openRouteChangeModal }) {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navigate = useNavigate();

  const onRoute = (location) => {
    if (isScoreZero) {
      navigate(location);
    } else {
      openRouteChangeModal(location);
    }
  };

  return (
    <>
      <div className="navbar">
        <button
          onClick={() => {
            onRoute("/");
          }}
          className={`navbar__button ${
            isActive("/") ? "navbar__button_active" : ""
          }`}
        >
          Home
        </button>
        <button
          onClick={() => {
            onRoute("/pokemon");
          }}
          className={`navbar__button ${
            isActive("/pokemon")
              ? "navbar__button_active navbar__button_active-wordle"
              : ""
          }`}
        >
          Pokemon
        </button>
        <button
          onClick={() => {
            onRoute("/sports");
          }}
          className={`navbar__button ${
            isActive("/sports")
              ? "navbar__button_active navbar__button_active-wordle"
              : ""
          }`}
        >
          Sports
        </button>
        <button
          onClick={() => {
            onRoute("/miscellaneous");
          }}
          className={`navbar__button ${
            isActive("/miscellaneous")
              ? "navbar__button_active navbar__button_active-wordle"
              : ""
          }`}
        >
          Misc.
        </button>
        <button
          onClick={() => {
            onRoute("/about");
          }}
          className={`navbar__button ${
            isActive("/about") ? "navbar__button_active" : ""
          }`}
        >
          About
        </button>
        <button
          onClick={() => {
            onRoute("/leaderboards");
          }}
          className={`navbar__button ${
            isActive("/leaderboards") ? "navbar__button_active" : ""
          }`}
        >
          Leaderboards
        </button>
      </div>
    </>
  );
}

export default NavBar;
