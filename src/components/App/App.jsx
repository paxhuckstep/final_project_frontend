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
import * as auth from "../../Utils/auth";
import { getToken, removeToken, setToken } from "../../Utils/token";
import { getPokemonLeaderboardData } from "../../Utils/api";
// import { addSolvedWord } from "../../Utils/api";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    corectWords: [],
    pokemonHighscore: 0,
  });
  // const [currentUser, setCurrentUser] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [genOne, setGenOne] = useState([]);
  const [genTwo, setGenTwo] = useState([]);
  const [genThree, setGenThree] = useState([]);
  const [genFour, setGenFour] = useState([]);
  const [genFive, setGenFive] = useState([]);
  const [pokemonLeaderboardData, setPokemonLeaderboardData] = useState([]);

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
    console.log("Register and stuff: ", username, password, confirmPassword);
    if (password === confirmPassword) {
      auth
        .register(username, password)
        .then((signupInfo) => {
          console.log("register .then ran: ", signupInfo);
          setCurrentUser(signupInfo.user);
          setToken(signupInfo.token);
          setIsLoggedIn(true);
          resetValues();
          setActiveModal("");
        })
        .catch(console.error);
    }
  };

  const handleLogin = ({ username, password }, resetValues) => {
    console.log("handleLogin ran: ", username, password);
    if (!username || !password) {
      return;
    }
    auth
      .authorize(username, password)
      .then((data) => {
        console.log("authorize .then ran: ", data);
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

  // const handleNewSolvedWord = (newSolvedWord) => {
  //   if (!currentUser.solvedWords.includes(newSolvedWord)) {
  //     console.log("this is the first time solving this word!");
  //     addSolvedWord(currentUser._id, newSolvedWord)
  //       .then((newUserData) => {
  //         setCurrentUser(newUserData)
  //       }
  //       )
  //       .catch(console.error(error));
  //   }
  // };

  const handleNewUserData = (userData) => {
    setCurrentUser(userData);
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
  //   console.log("isLoggedIn: ", isLoggedIn);
  // }, [isLoggedIn]);

  useEffect(() => {
    getPokemonLeaderboardData()
    .then((data) => {
      setPokemonLeaderboardData(data);
    })
    .catch(console.error);
    const token = getToken();
    if (!token) {
      return;
    }
    auth
      .getCurrentUser(token)
      .then((userData) => {
        setIsLoggedIn(true);
        setCurrentUser(userData);
      })
      .catch(console.error);
  }, []);

  // console.log("currentUser: ", currentUser);

  return (
    <div className="app">
      <Header
        currentUser={currentUser}
        openRegisterModal={openRegisterModal}
        openLoginModal={openLoginModal}
        isLoggedIn={isLoggedIn}
        handleLogOut={handleLogOut}
      />
      <main className="app__body">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                currentUser={currentUser}
                isLoggedIn={isLoggedIn}
                handleNewUserData={handleNewUserData}
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
          <Route
            path="/leaderboards"
            element={<Leaderboards pokemonLeaderboardData={pokemonLeaderboardData} />}
          />
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
