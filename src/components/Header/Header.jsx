import HeaderProfile from "../HeaderProfile/HeaderProfile";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

function Header({ openRegisterModal, openLoginModal, closeActiveModal }) {
  return (
    <div className="header">
      <h1 className="header__title">Pax's Final Project</h1>
      <p className="header__sub-title">a worlde game</p>
      <HeaderProfile
        openRegisterModal={openRegisterModal}
        openLoginModal={openLoginModal}
      />
      <NavBar />
    </div>
  );
}

export default Header;
