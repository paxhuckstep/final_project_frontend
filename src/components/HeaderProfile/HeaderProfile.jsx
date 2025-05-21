import "./HeaderProfile.css";

function HeaderProfile({
  currentUser,
  openLoginModal,
  openRegisterModal,
  isLoggedIn,
  handleLogOut,
}) {
  // const isLoggedIn = false;

  let username = currentUser?.username;
  username = username.charAt(0).toUpperCase() + username.slice(1);

  if (isLoggedIn) {
    return (
      <div className="header-profile">
        <button className="header-profile__button header-profile__button_username">
          {username}
        </button>
        <button onClick={handleLogOut} className="header-profile__button">
          Log Out
        </button>
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
