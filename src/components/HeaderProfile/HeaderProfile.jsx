import "./HeaderProfile.css";

function HeaderProfile({ currentUser, openLoginModal, openRegisterModal, isLoggedIn, handleLogOut }) {
  // const isLoggedIn = false;

  if (isLoggedIn) {
    return (
      <div className="header-profile">
        {/* <p className="header-profile__text">{currentUser?.username}</p> */}
        <button onClick={handleLogOut} className="header-profile__button">Log Out</button>
      </div>
    );
  }
  return (
    <>
      <div className="header-profile">
        <button onClick={openRegisterModal} className="header-profile__button">
          Register
        </button>
        <button onClick={openLoginModal} className="header-profile__button">
          Login
        </button>
      </div>
    </>
  );
}

export default HeaderProfile;
