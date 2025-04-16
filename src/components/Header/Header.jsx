import HeaderProfile from "../HeaderProfile/HeaderProfile";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

function Header({ openRegisterModal, openLoginModal, isLoggedIn, handleLogOut }) {
  return (
    <div className="header">
      <h1 className="header__title">Nerdle</h1>
      <p className="header__sub-title">Test your nerd</p>
      <HeaderProfile
        openRegisterModal={openRegisterModal}
        openLoginModal={openLoginModal}
        isLoggedIn={isLoggedIn}
        handleLogOut={handleLogOut}
      />
      <NavBar />
    </div>
  );
}

export default Header;
