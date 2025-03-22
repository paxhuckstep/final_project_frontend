import "./HeaderProfile.css";

function HeaderProfile() {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <>//logged in stuff</>;
  }
  return (
    <>
      <div className="header-profile">
        <button className="header-profile__register">Register</button>
        <button className="header-profile__login">Login</button>
      </div>
    </>
  );
}

export default HeaderProfile;
