import { Link } from "react-router";
import "./NavBar.css";
function NavBar() {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <button className="navbar__home">Home</button>
        </Link>
        <Link to="/about">
          <button className="navbar__about">About</button>
        </Link>
        <Link to="/leaderboards">
          <button className="navbar__leaderboards">Leaderboards</button>
        </Link>
      </div>
    </>
  );
}

export default NavBar;
