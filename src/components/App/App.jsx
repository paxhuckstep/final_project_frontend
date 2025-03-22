import "./App.css";
import Header from "../Header/Header";
import { Routes, Route } from "react-router";
import Home from "../Home/Home";
import About from "../About/About";
import Leaderboards from "../Leaderboards/Leaderboards";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const openRegisterModal = () => {
    setActiveModal("register");
  };
  const openLoginModal = () => {
    setActiveModal("log-in");
  };
  return (
    <>
      <div className="app">
        <Header />
        <div className="app__body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/leaderboards" element={<Leaderboards />} />
          </Routes>
        </div>
        <RegisterModal
          onClose={closeActiveModal}
          isOpen={activeModal === "register"}
          onRegisterSubmit={handleRegistration}
          handleSignInClick={handleSignInClick}
        />
        <LoginModal
          onClose={closeActiveModal}
          isOpen={activeModal === "log-in"}
          handleLogIn={handleLogIn}
          handleRegisterClick={handleRegisterClick}
        />
      </div>
    </>
  );
}

export default App;
