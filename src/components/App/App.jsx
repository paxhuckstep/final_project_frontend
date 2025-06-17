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
import { MISC_DATA, SPORTS_DATA } from "../../Utils/constants";
import ErrorPopup from "../ErrorPopup/ErrorPopup";

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
  const [genSix, setGenSix] = useState([]);
  const [genSeven, setGenSeven] = useState([]);
  const [genEight, setGenEight] = useState([]);
  const [genNine, setGenNine] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  // const [isError, setIsError] = useState(false);

  const POKEMON_DATA = [
    { title: "Gen One", words: genOne },
    { title: "Gen Two", words: genTwo },
    { title: "Gen Three", words: genThree },
    { title: "Gen Four", words: genFour },
    { title: "Gen Five", words: genFive },
    { title: "Gen Six", words: genSix },
    { title: "Gen Seven", words: genSeven },
    { title: "Gen Eight", words: genEight },
    { title: "Gen Nine", words: genNine },
  ];

  const navigate = useNavigate();

  const openRegisterModal = () => {
    // console.log("openRegisterModal fired");
    setActiveModal("register");
  };
  const openLoginModal = () => {
    setActiveModal("log-in");
  };
  const closeActiveModal = () => {
    setActiveModal("");
    setErrorMessage("");
  };

  const handleErrorMessage = (message) => {
    setErrorMessage(message);
    setActiveModal("error-popup");
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
          // console.log("register .then ran: ", signupInfo);
          setCurrentUser(signupInfo.user);
          setToken(signupInfo.token);
          setIsLoggedIn(true);
          resetValues();
          setActiveModal("");
        })
        .catch((error) => {
          console.error(error);
          if (error.message === "Username unavailable") {
            setErrorMessage("This Username is taken, please try another.");
          }
        });
    } else {
      setErrorMessage(
        "The password and confirm password don't match, please try again."
      );
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
      .catch((error) => {
        console.error(error);
        console.log(error.message);
        if (error.message === "Incorrect email or password") {
          setErrorMessage(
            "Username or password is incorrect, please try again."
          );
        }
      });
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

  // useEffect(() => {
  //   setErrorMessage("");
  // }, [activeModal]);

  useEffect(() => {
    for (let i = 1; i < 10; i++) {
      getPokemon(i.toString())
        .then((data) => {
          const filteredPokemonData = filterPokemonData(data);
          switch (i) {
            case 1: {
              // console.log("GEN ONE: ", filteredPokemonData);
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
            case 6: {
              setGenSix(filteredPokemonData);
              break;
            }
            case 7: {
              setGenSeven(filteredPokemonData);
              break;
            }
            case 8: {
              setGenEight(filteredPokemonData);
              break;
            }
            case 9: {
              setGenNine(filteredPokemonData);
              break;
            }
          }
        })
        .catch(() => {
          console.error("PokeApi problem, refresh to fix");
          setErrorMessage(
            "Unable to connect to PokeApi. Please refresh the page to try again, or play a different theme."
          );
          setActiveModal("error-popup");
        });
    }
  }, []);

  useEffect(() => {
    console.log("activeModal: ", activeModal);
  }, [activeModal]);

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
                openLoginModal={openLoginModal}
                handleNewUserData={handleNewUserData}
                activeModal={activeModal}
                handleErrorMessage={handleErrorMessage}
                sideBarData={POKEMON_DATA}
                highScoreName={"pokemonHighScore"}
              />
            }
          />
          <Route
            path="sports"
            element={
              <Wordle
                currentUser={currentUser}
                isLoggedIn={isLoggedIn}
                openLoginModal={openLoginModal}
                handleNewUserData={handleNewUserData}
                activeModal={activeModal}
                handleErrorMessage={handleErrorMessage}
                sideBarData={SPORTS_DATA}
                highScoreName={"sportsHighScore"}
              />
            }
          />
          <Route
            path="miscellaneous"
            element={
              <Wordle
                currentUser={currentUser}
                isLoggedIn={isLoggedIn}
                openLoginModal={openLoginModal}
                handleNewUserData={handleNewUserData}
                activeModal={activeModal}
                handleErrorMessage={handleErrorMessage}
                sideBarData={MISC_DATA}
                highScoreName={"miscellaneousHighScore"}
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
        errorMessage={errorMessage}
      />
      <LoginModal
        onClose={closeActiveModal}
        isOpen={activeModal === "log-in"}
        handleLogIn={handleLogin}
        openRegisterModal={openRegisterModal}
        errorMessage={errorMessage}
      />
      <ErrorPopup
        isOpen={activeModal === "error-popup"}
        errorMessage={errorMessage}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
