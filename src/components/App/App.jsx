import "./App.css";
import Header from "../Header/Header";
import { Routes, Route } from "react-router";
import Home from "../Home/Home";
import About from "../About/About";
import Leaderboards from "../Leaderboards/Leaderboards";
import { useEffect, useState } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import { filterPokemonData, getPokemon } from "../../Utils/pokeApi";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [genOne, setGenOne] = useState([]);
  const [genTwo, setGenTwo] = useState([]);
  const [genThree, setGenThree] = useState([]);
  const [genFour, setGenFour] = useState([]);
  const [genFive, setGenFive] = useState([]);

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
  useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        closeActiveModal();
      }
    };
    window.addEventListener("keydown", handleEscClose);
    return () => {
      window.removeEventListener("keydown", handleEscClose);
    };
  }, []);

  useEffect(() => {
    for (let i = 1; i < 6; i++) {
      getPokemon(i.toString())
        .then((data) => {
          const filteredPokemonData = filterPokemonData(data);
          switch (i) {
            case 1: {
              setGenOne(filteredPokemonData);
              break;
            }
            case 2: {
              setGenTwo(filteredPokemonData);
              break;
            }
            case 3: {
              setGenThree(filteredPokemonData);
              break;
            }
            case 4: {
              setGenFour(filteredPokemonData);
              break;
            }
            case 5: {
              setGenFive(filteredPokemonData);
              break;
            }
          }
        })
        .catch(console.error);
    }
  }, []);
    // useEffect(() => {
  //   const overlap = randomWords.filter((word) => {
  //     return fiveLetters.includes(word) || sixLetters.includes(word);
  //   });
  //   console.log(overlap);
  // }, [genOne]);

  return (
    <div className="app">
      <Header
        openRegisterModal={openRegisterModal}
        openLoginModal={openLoginModal}
      />
      <main className="app__body">
        <Routes>
          <Route path="/" element={<Home activeModal={activeModal}
          genOne={genOne}
          genTwo={genTwo}
          genThree={genThree}
          genFour={genFour}
          genFive={genFive}
          />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
        </Routes>
      </main>
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
  );
}

export default App;
