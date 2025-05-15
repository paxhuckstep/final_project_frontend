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
        <HomeBody
          isLoggedIn={isLoggedIn}
          currentUser={currentUser}
          openLoginModal={openLoginModal}
          openRegisterModal={openRegisterModal}
        />
        
      </section>
    </>
  );
}

export default Home;
