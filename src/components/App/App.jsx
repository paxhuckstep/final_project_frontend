import "./App.css";
import Header from "../Header/Header";
import { Routes, Route, useNavigate } from "react-router";
import Home from "../Home/Home";
import About from "../About/About";
import Leaderboards from "../Leaderboards/Leaderboards";
import { useEffect, useState } from "react";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import { filterPokemonData, getPokemon } from "../../Utils/pokeApi";
import * as auth from "../../Utils/auth";
import { getToken, removeToken, setToken } from "../../Utils/token";
import Wordle from "../Wordle/Wordle";
import {
  GOLF_MASTERS_DATA,
  MLB_DATA,
  NBA_DATA,
  NFL_DATA,
  NHL_DATA,
} from "../../Utils/constants";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    username: "",
    corectWords: [],
    pokemonHighscore: 0,
  });
  const [activeModal, setActiveModal] = useState("");
  const [genOne, setGenOne] = useState([]);
  const [genTwo, setGenTwo] = useState([]);
  const [genThree, setGenThree] = useState([]);
  const [genFour, setGenFour] = useState([]);
  const [genFive, setGenFive] = useState([]);

  const navigate = useNavigate();

  const openRegisterModal = () => {
    console.log("openRegisterModal fired")
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
    // console.log("Register and stuff: ", username, password, confirmPassword);
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
    // console.log("handleLogin ran: ", username, password);
    if (!username || !password) {
      return;
    }
    auth
      .authorize(username, password)
      .then((data) => {
        // console.log("authorize .then ran: ", data);
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

  const handleNewUserData = (userData) => {
    setCurrentUser(userData);
  };

  const handleLogOut = () => {
    removeToken();
    setIsLoggedIn(false);
    navigate("/");
  };

  useEffect(() => {
    // console.log(arrayDublicates(NFL_DATA, NBA_DATA));
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

  // const arrayDublicates = (arrayOne, arrayTwo) => {
  //   return arrayOne.filter((word) => {
  //     return arrayTwo.includes(word);
  //   });
  // };

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
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
                openRegisterModal={openRegisterModal}
                openLoginModal={openLoginModal}
              />
            }
          />
          <Route
            path="pokemon"
            element={
              <Wordle
                currentUser={currentUser}
                isLoggedIn={isLoggedIn}
                handleNewUserData={handleNewUserData}
                activeModal={activeModal}
                categoryTitles={{
                  one: "Gen One",
                  two: "Gen Two",
                  three: "Gen Three",
                  four: "Gen Four",
                  five: "Gen Five",
                }}
                categoryArrayOne={genOne}
                categoryArrayTwo={genTwo}
                categoryArrayThree={genThree}
                categoryArrayFour={genFour}
                categoryArrayFive={genFive}
              />
            }
          />
          <Route
            path="sports"
            element={
              <Wordle
                currentUser={currentUser}
                isLoggedIn={isLoggedIn}
                handleNewUserData={handleNewUserData}
                activeModal={activeModal}
                categoryTitles={{
                  one: "NFL",
                  two: "NBA",
                  three: "NHL",
                  four: "MLB",
                  five: "Golf",
                }}
                categoryArrayOne={NFL_DATA}
                categoryArrayTwo={NBA_DATA}
                categoryArrayThree={NHL_DATA}
                categoryArrayFour={MLB_DATA}
                categoryArrayFive={GOLF_MASTERS_DATA}
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
