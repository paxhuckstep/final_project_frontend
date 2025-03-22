import "./HeaderProfile.css";

function HeaderProfile({openLoginModal, openRegisterModal}) {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <>//logged in stuff</>;
  }
  return (
    <>
      <div className="header-profile">
        <button onClick={openRegisterModal} className="header-profile__register">Register</button>
        <button onClick={openLoginModal} className="header-profile__login">Login</button>
      </div>
    </>
  );
}

export default HeaderProfile;
