import { Link } from "react-router";
import HomeBody from "../HomeBody/HomeBody";
import "./Home.css";

function Home({ isLoggedIn, currentUser, openRegisterModal, openLoginModal }) {
  return (
    <>
      <section className="home">
        <h1 className="home__title">Welcome to Pax's Wordle</h1>
        <h2 className="home__sub-title">
          Play Wordle, Compete with Friends, Get High Scores
        </h2>
        <div className="home__body">
          <HomeBody
            isLoggedIn={isLoggedIn}
            currentUser={currentUser}
            openLoginModal={openLoginModal}
            openRegisterModal={openRegisterModal}
          />{" "}
          <h2 className="home__sub-title">Get Started:</h2>
          <div className="home__play-selector">
            <Link to="/pokemon">
              {" "}
              <button className="home__play-button">Play Pokemon</button>
            </Link>
            <Link to="/sports">
              <button className="home__play-button">Play Sports</button>
            </Link>
            <Link to="/about">
              <button className="home__play-button">Rules</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
