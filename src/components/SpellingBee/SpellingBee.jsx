import { useEffect, useState, useRef } from "react";

import Popup from "../Popup/Popup";
import SideBar from "../SideBar/SideBar";
import "./SpellingBee.css";
import { ALPHABET_ARRAY, VOWEL_ARRAY } from "../../Utils/constants";
import { addSolvedWord, isWordRealApi, updateHighScore } from "../../Utils/api";
import { getToken } from "../../Utils/token";
import { useLocation } from "react-router";

function SpellingBee(
  {
    //   currentUser,
    //   isLoggedIn,
    //   openLoginModal,
    //   handleNewUserData,
    //   activeModal,
    //   handleErrorMessage,
    //   handleIsScoreZeroChange,
    //   sideBarData,
    //   highScoreName,
  }
) {
  //   const [correctWord, setCorrectWord] = useState("");
  const [possibleLettersOptional, setPossibleLettersOptional] = useState([]);
  const [possibleLetterRequired, setPossibleLetterRequired] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [foundWords, setFoundWords] = useState([]);
  //   const [isWin, setIsWin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  //   const [isGrid, setIsGrid] = useState(false);
  //   const [remainingLetters, setRemainingLetters] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [score, setScore] = useState(0);
  //   const [potentialWager, setPotentialWager] = useState(0);
  //   const [wager, setWager] = useState(0);
  const [oldLocation, setOldLocation] = useState("");

  const location = useLocation();

  const closePopup = () => {
    setIsOpen(false);
  };

  const setPossibleLetters = () => {
    const requiredLetter = ALPHABET_ARRAY[Math.floor(Math.random() * 26)];

    setPossibleLetterRequired(requiredLetter);
    let localAlphabet = ALPHABET_ARRAY.concat().filter(
      (letter) => letter !== requiredLetter
    );

    let optionalLetters = Array(6);
    for (let i = 0; i < 5; i++) {
      optionalLetters[i] =
        localAlphabet[Math.floor(Math.random() * localAlphabet.length)];
      localAlphabet.filter((letter) => letter !== optionalLetters[i]);
    }
    if (!optionalLetters.some((letter) => VOWEL_ARRAY.includes(letter))) {
      console.log("no vowels! yet :)")
      optionalLetters[5] = VOWEL_ARRAY[Math.floor(Math.random * 5)];
    } else {
      optionalLetters[5] =
        localAlphabet[Math.floor(Math.random() * localAlphabet.length)];
    }

    setPossibleLettersOptional(optionalLetters);

    console.log("Required Letter: ", requiredLetter);
    console.log("Optional Letters: ", optionalLetters);
  };

  const testAnswer = () => {
    console.log("test answer ran");

    isWordRealApi(currentInput.join(""))
      .then((isWord) => {
        if (isWord && !foundWords.includes(currentInput.join())) {
          console.log("is a word");
          setScore((prev) => (prev += getScoreValue(currentInput)));
          setFoundWords((prev) => [...prev, currentInput]);
          setCurrentInput([]);
        } else {
          console.log("answer not accepted");
        }
      })
      .catch(() => console.error());
  };

  const getScoreValue = (word) => {
    if (word.length === 4) {
      return 1;
    }

    let isPangram = true;
    let allLetters = [];
    allLetters = [...possibleLettersOptional, possibleLetterRequired];
    allLetters.forEach((letter) => {
      if (!word.includes(letter)) {
        isPangram = false;
      }
      return word.length + isPangram ? 7 : 0;
    });
  };

  const handleNewLetters = () => {};

  useEffect(() => {
    const handleKeyDown = (event) => {
      // console.log(event.key);
      const isLetter = /[a-z]$/i.test(event.key);
      //   if (activeModal) {
      //     return;
      //   }
      if (event.key == "Backspace") {
        setCurrentInput((prev) => prev.slice(0, -1));
        return;
      }
      if (event.key == "Escape") {
        setIsOpen(false);
      }
      if (event.key == "Enter") {
        event.preventDefault();
        testAnswer();
        return;
      }

      if (event.key.length > 1 || isLocked) {
        return;
      }
      if (isLetter) {
        setCurrentInput((prev) => [...prev, event.key.toLowerCase()]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentInput, isOpen]);

  //   useEffect(() => {
  //     if (!isLoggedIn) {
  //       setScore(0);
  //     }
  //   }, [isLoggedIn]);

  useEffect(() => {
    setPossibleLetters();
  }, []);

  return (
    <>
      <div className="spelling_bee">
        <p className="spelling_bee__input">{currentInput}</p>
      </div>
    </>
  );
}

export default SpellingBee;
