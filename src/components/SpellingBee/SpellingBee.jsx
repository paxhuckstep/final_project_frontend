import { useEffect, useState, useRef } from "react";

import Popup from "../Popup/Popup";
import SideBar from "../SideBar/SideBar";
import "./SpellingBee.css";
import { ALPHABET_ARRAY } from "../../Utils/constants";
import { addSolvedWord, isWordReal, updateHighScore } from "../../Utils/api";
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

  const testAnswer = () => {
    console.log("test answer ran");

    let isWord = false;
    isWord = isWordReal(currentInput.join(""))
      .then((res) => {
        return res;
      })
      .catch(() => console.error());

    console.log("IsWordReal: ", isWordReal(currentInput.join("")));

    // if (isWordReal(currentInput.join("")) && !foundWords.includes(currentInput.join())) {
    //     console.log("is a word")
    //   setScore((prev) => prev += getScoreValue(currentInput));
    //   setFoundWords((prev) => prev.append(currentInput));
    //   setCurrentInput([]);
    // } else {
    //     console.log("answer not accepted")
    // }
  };

  const getScoreValue = (word) => {
    if (word.length === 4) {
      return 1;
    }

    let isPangram = true;
    allLetters = possibleLettersOptional.append(possibleLetterRequired);
    allLetters.forEach((letter) => {
      if (!word.contains(letter)) {
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

  return (
    <>
      <div className="spelling_bee">
        <p className="spelling_bee__input">{currentInput}</p>
      </div>
    </>
  );
}

export default SpellingBee;
