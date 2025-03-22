import HeaderProfile from "../HeaderProfile/HeaderProfile";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

function Header({}) {
  return (
    <div className="header">
      <h1 className="header__title">Pax's Wordle Thing</h1>
      <HeaderProfile />
      <NavBar />
    </div>
  );
}

export default Header;
