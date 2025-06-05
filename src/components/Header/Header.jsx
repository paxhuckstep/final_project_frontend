import HeaderProfile from "../HeaderProfile/HeaderProfile";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

function Header({
  currentUser,
  openRegisterModal,
  openLoginModal,
  isLoggedIn,
  handleLogOut,
}) {
  return (
    <div className="header">
      <h1 className="header__title">Pax's Wordle</h1>
      <p className="header__sub-title">Wordle by Pax</p>
      <HeaderProfile
        currentUser={currentUser}
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
