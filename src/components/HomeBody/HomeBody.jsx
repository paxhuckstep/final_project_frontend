import "./HomeBody.css";

function HomeBody({
  isLoggedIn,
  currentUser,
  openRegisterModal,
  openLoginModal,
}) {
  let username = currentUser?.username;
  username = username.charAt(0).toUpperCase() + username.slice(1);

  if (!isLoggedIn) {
    return (
      <>
        <section className="homebody">
          <p className="homebody__action">
            New?
            <button
              onClick={() => openRegisterModal()}
              className="homebody__action_button"
            >
              {" "}
              Register{" "}
            </button>
            to save your high score and compete on the leaderboards!
          </p>
          <p className="homebody__action">
            Come here often?
            <button
              onClick={() => openLoginModal()}
              className="homebody__action_button"
            >
              {" "}
              Login{" "}
            </button>
            to and cary on where you left off.
          </p>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="homebody">
          <p className="homebody__username">Hey there {username}</p>
          <p className="homebody__scores">
            Your Pokemon high score is: {currentUser?.pokemonHighScore}
          </p>
          <p className="homebody__scores">
            Your sports high score is: {currentUser?.sportsHighScore}
          </p>
        </section>
      </>
    );
  }
}

export default HomeBody;
