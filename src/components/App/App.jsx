import "./App.css";
import Header from "../Header/Header";
import { Routes, Route } from "react-router";
import Home from "../Home/Home";
import About from "../About/About";
import Leaderboards from "../Leaderboards/Leaderboards";
import { useState } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const openRegisterModal = () => {
    setActiveModal("register");
  };
  const openLoginModal = () => {
    setActiveModal("log-in");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleRegistration = (
    { username, password, confirmPassword },
    resetValues
  ) => {
    console.log("Register and stuff", username, password === confirmPassword);
    setActiveModal("");
    //resevValues() inside of a .then eventually
  };

  const handleLogin = ({ username, password }, resetValues) => {
    console.log("Log in and stuff", username, password);
    setActiveModal("");
    //resetValues() inside of a .then eventually
  };

  return (
    <>
      <div className="app">
        <Header
          openRegisterModal={openRegisterModal}
          openLoginModal={openLoginModal}
        />
        <div className="app__body">
          <Routes>
            <Route path="/" element={<Home activeModal={activeModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/leaderboards" element={<Leaderboards />} />
          </Routes>
        </div>
        <RegisterModal
          onClose={closeActiveModal}
          isOpen={activeModal === "register"}
          handleRegistration={handleRegistration}
          openLoginModal={openLoginModal}
        />
        <LoginModal
          onClose={closeActiveModal}
          isOpen={activeModal === "log-in"}
          handleLogIn={handleLogin}
          openRegisterModal={openRegisterModal}
        />
      </div>
    </>
  );
}

export default App;
