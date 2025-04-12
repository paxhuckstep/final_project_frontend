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
import * as auth from "../../utils/auth";

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
    console.log("Register and stuff", username, password, confirmPassword);
    if (password === confirmPassword) {
      auth
        .register(username, password)
        .then((signupInfo) => {
          setCurrentUser(signupInfo.username);
          setToken(signupInfo.token);
          setIsLoggedIn(true);
          resetValues();
          setActiveModal("");
        })
        .catch(console.error);
    }
  };

  const handleLogin = ({ username, password }, resetValues) => {
    if (!username || !password) {
      return;
    }
    auth
      .authorize(username, password)
      .then((data) => {
        if (data.token) {
          setToken(data.token);
          setIsLoggedIn(true);
          auth
            .getCurrentUser(data.token)
            .then((userData) => {
              setCurrentUser(userData);
              resetValues();
              setActiveModal("");
            })
            .catch(console.error);
        }
      })
      .catch(console.error);
  };

  const handleLogOut = () => {
    removeToken();
    setIsLoggedIn(false);
    navigate("/");
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
        .catch(
          console.error(
            "Sorry, unable to connect to PokeApi, please refresh and try again."
          )
        );
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
          <Route
            path="/"
            element={
              <Home
                activeModal={activeModal}
                genOne={genOne}
                genTwo={genTwo}
                genThree={genThree}
                genFour={genFour}
                genFive={genFive}
              />
            }
          />
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
