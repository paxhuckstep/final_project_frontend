import { useEffect, useState, useRef } from "react";

import Popup from "../Popup/Popup";
// import SideBar from "../SideBar/SideBar";
import "./SpellingBee.css";
import { ALPHABET_ARRAY, VOWEL_ARRAY } from "../../Utils/constants";
import { addSolvedWord, isWordRealApi, updateHighScore } from "../../Utils/api";
import { getToken } from "../../Utils/token";
import { useLocation } from "react-router";
import LettersModal from "../LettersModal/LettersModal";

function SpellingBee() {
  const [possibleLettersOptional, setPossibleLettersOptional] = useState([]);
  const [possibleLetterRequired, setPossibleLetterRequired] = useState("");
  const [currentInput, setCurrentInput] = useState("");
  const [foundWords, setFoundWords] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [isLocked, setIsLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [oldLocation, setOldLocation] = useState("");
  const [fullDelete, setFullDelete] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const location = useLocation();

  const closePopup = () => {
    setIsOpen(false);
  };

  const setLettersManual = (letters, resetValues) => {
    const { optionalLetters, requiredLetter } = letters;
    // const dublicateFound = letters.some((letterSearch, index) => {

    const allLetters = [...optionalLetters.split(""), requiredLetter];
    console.log(allLetters);
    const lettersCopy = allLetters.concat();
    const duplicateLetters = lettersCopy.filter((letter, index) => {
      lettersCopy.indexOf(letter) !== index;
    });
    console.log(duplicateLetters);

    //check values work
    //resetValues()
  };

  const setLettersRandom = () => {
    const requiredLetter = ALPHABET_ARRAY[Math.floor(Math.random() * 26)];
    // console.log("requiredLetter: ", requiredLetter);
    setPossibleLetterRequired(requiredLetter);

    let localAlphabet = ALPHABET_ARRAY.concat().filter(
      (letter) => letter !== requiredLetter
    );
    // console.log("localAlphabet (required letter removed): ", localAlphabet);

    let optionalLetters = Array(6);
    for (let i = 0; i < 5; i++) {
      optionalLetters[i] =
        localAlphabet[Math.floor(Math.random() * localAlphabet.length)];
      localAlphabet = localAlphabet.filter(
        (letter) => letter !== optionalLetters[i]
      );
    }
    if (
      !optionalLetters.some(
        (letter) =>
          VOWEL_ARRAY.includes(letter) && !VOWEL_ARRAY.includes(requiredLetter)
      )
    ) {
      console.log("no vowels! yet :)");
      optionalLetters[5] = VOWEL_ARRAY[Math.floor(Math.random() * 5)];
    } else {
      optionalLetters[5] =
        localAlphabet[Math.floor(Math.random() * localAlphabet.length)];
    }

    setPossibleLettersOptional(optionalLetters);

    // setPossibleLetterRequired("i");
    // setPossibleLettersOptional(["g", "r", "a", "s", "o", "n"]);

    // console.log("localAlphabet post apocolypse: ", localAlphabet);
    console.log("Required Letter: ", requiredLetter);
    console.log("Optional Letters: ", optionalLetters);
  };

  const testAnswer = () => {
    console.log("test answer ran");
    const word = currentInput.join("");
    if (
      currentInput.length > 3 &&
      currentInput.includes(possibleLetterRequired)
    ) {
      isWordRealApi(word)
        .then((isWord) => {
          console.log("foundWords: ", foundWords);
          if (isWord && !foundWords.includes(word)) {
            const scoreValue = getScoreValue(currentInput);
            console.log("Score Value: ", scoreValue);
            setScore((prev) => (prev += getScoreValue(currentInput)));
            setFoundWords((prev) => [...prev, word]);
            // setCurrentInput([]);
            setFullDelete(true);
          } else {
            console.log("answer not accepted");
          }
        })
        .catch(() => console.error());
    } else {
      console.log("not long enough / missing required letter");
    }
  };

  const getScoreValue = (word) => {
    if (word.length === 4) {
      return 1;
    }

    // let isPangram = true;
    let allLetters = [];
    allLetters = [...possibleLettersOptional, possibleLetterRequired];
    let isPangram = true;
    allLetters.forEach((letter) => {
      if (!word.includes(letter)) {
        isPangram = false;
      }
    });

    if (isPangram) {
      return word.length + 7;
    }
    return word.length;
  };

  const handleNewLetters = () => {};

  const openEnterLetters = () => {
    setIsOpen(true);
  };

  const closeActiveModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // console.log(event.key);
      const isLetter = /[a-z]$/i.test(event.key);
      //   if (activeModal) {
      //     return;
      //   }
      if (isOpen) {
        return;
      }
      if (event.key == "Backspace") {
        if (fullDelete) {
          setCurrentInput([]);
          // return;
        } else {
          setCurrentInput((prev) => prev.slice(0, -1));
          return;
        }
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
      if (
        // isLetter &&
        possibleLetterRequired == event.key ||
        possibleLettersOptional.includes(event.key)
      ) {
        setCurrentInput((prev) => [...prev, event.key.toLowerCase()]);
      }
      setFullDelete(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [
    currentInput,
    isOpen,
    possibleLetterRequired,
    possibleLettersOptional,
    foundWords,
  ]);

  //   useEffect(() => {
  //     if (!isLoggedIn) {
  //       setScore(0);
  //     }
  //   }, [isLoggedIn]);

  useEffect(() => {
    setLettersRandom();
  }, []);

  return (
    <>
      <div className="spelling-bee">
        <p className="spelling-bee__input">{currentInput}</p>

        <div className="spelling-bee__letters">
          <p className="spelling-bee__required">
            Required: {possibleLetterRequired.toUpperCase()}
          </p>
          <p className="spelling-bee__optional">
            Optional: {possibleLettersOptional.join(" ").toUpperCase()}
          </p>
          <p className="spelling-bee__score">Score: {score}</p>
          <p className="spelling-bee__words">
            Found Words: {foundWords.join(", ")}
          </p>
          <div className="spelling-bee__buttons">
            <button className="spelling-bee__manual">Choose Letters</button>
            <button className="spelling-bee__random">New Random Letters</button>
          </div>
        </div>

        <LettersModal
          onClose={closeActiveModal}
          isOpen={isOpen}
          setLettersRandom={setLettersRandom}
          setLettersManual={setLettersManual}
          errorMessage={errorMessage}
          // isWaitingResponse={isWaitingResponse}
        />
      </div>
    </>
  );
}

export default SpellingBee;
