import { useEffect, useState } from "react";
import Grid from "../Grid/Grid";
import WordleTools from "../WordleTools/WordleTools";
import Popup from "../Popup/Popup";
import SideBar from "../SideBar/SideBar";
import "./Wordle.css";
import { ALPHABET_ARRAY } from "../../Utils/constants";
import { addSolvedWord, updateHighScore } from "../../Utils/api";
import { getToken } from "../../Utils/token";
import { useLocation } from "react-router";

function Wordle({
  currentUser,
  isLoggedIn,
  handleNewUserData,
  activeModal,
  sideBarData,
  highScoreName,
}) {
  const [correctWord, setCorrectWord] = useState("");
  const [currentInputs, setCurrentInputs] = useState([]);
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [submissions, setSubmissions] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [isWin, setIsWin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isGrid, setIsGrid] = useState(false);
  const [remainingLetters, setRemainingLetters] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [score, setScore] = useState(0);
  const [potentialWager, setPotentialWager] = useState(0);
  const [wager, setWager] = useState(0);
  const [oldLocation, setOldLocation] = useState("");

  const location = useLocation();

  const closePopup = () => {
    setIsOpen(false);
  };

  const increasePotentialWager = () => {
    setPotentialWager((prev) => prev + 1);
  };

  const decreasePotentialWager = () => {
    setPotentialWager((prev) => prev - 1);
  };

  const testAnswer = () => {
    const correctWordGreenless = correctWord
      .split("")
      .filter((letter, index) => {
        return currentInputs[index] !== letter;
      });
    // console.log("correct word greenless: ", correctWordGreenless);

    let possibleYellowCount = Array(26).fill(0);

    correctWordGreenless.forEach((letter) => {
      possibleYellowCount[ALPHABET_ARRAY.indexOf(letter)]++;
    });
    // console.log("possible yellow count: ", possibleYellowCount);

    const newSubmission = currentInputs.map((letter, index) => {
      let isYellow = false;
      if (
        letter !== correctWord.charAt(index) &&
        correctWordGreenless.join("").includes(letter) &&
        possibleYellowCount[ALPHABET_ARRAY.indexOf(letter)] > 0
      ) {
        isYellow = true;
        possibleYellowCount[ALPHABET_ARRAY.indexOf(letter)]--;
      }

      return {
        index: index,
        letter: letter,
        boxClass:
          letter === correctWord.charAt(index)
            ? "box_green"
            : isYellow
            ? "box_yellow"
            : "box_wrong",
      };
    });
    // console.log("new submission: ", newSubmission);

    setSubmissions((prev) => [...prev, newSubmission]);
    setCurrentAttempt((prev) => prev + 1);
    if (currentInputs.join("") === correctWord) {
      setIsOpen(true);
      setIsWin(true);
      setIsLocked(true);
      setScore((prevScore) => prevScore + wager);
      if (isLoggedIn) {
        handleNewSolvedWord(correctWord);
      }
    }
    setCurrentInputs([]);
  };

  const handleNewWord = () => {
    if (selectedWords.length > 0) {
      setCorrectWord(
        selectedWords[Math.floor(Math.random() * selectedWords.length)]
      );
    } else {
      setCorrectWord("");
    }
    setWager(potentialWager);
    // setCorrectWord("test");
    setSubmissions([]);
    setIsOpen(false);
    setIsWin(false);
    setCurrentAttempt(1);
    setCurrentInputs([]);
    setIsLocked(false);
    if (selectedWords.length > 0) {
      setIsGrid(true);
    } else {
      setIsGrid(false);
    }
  };

  const handleNewWordClick = () => {
    handleNewWord();
    if (currentAttempt > 1 && !isWin) {
      setScore(0);
    }
  };

  const handleNewSolvedWord = (newSolvedWord) => {
    if (!currentUser.solvedWords.includes(newSolvedWord) && isLoggedIn) {
      const token = getToken();
      addSolvedWord(token, newSolvedWord)
        .then((newUserData) => {
          handleNewUserData(newUserData);
        })
        .catch((error) => console.error(error));
    }
  };

  const handleNewHighScore = () => {
    if (score > currentUser?.[highScoreName] && isLoggedIn) {
      const token = getToken();
      updateHighScore(token, score, highScoreName)
        .then((newUserData) => {
          handleNewUserData(newUserData);
        })
        .catch((error) => console.error(error));
    }
  };

  useEffect(() => {
    handleNewHighScore();
    // console.log("handleNewHighScore triggered");
  }, [score]);

  useEffect(() => {
    if (currentAttempt === 7) {
      setIsOpen(true);
      if (!isWin) {
        setScore(0);
      }
    }
  }, [currentAttempt]);

  const addCategory = (categoryArray) => {
    setSelectedWords((prev) => prev.concat(categoryArray));
  };

  const removeCategory = (categoryArray) => {
    let result = [];

    for (let i = 0; i < selectedWords.length; ) {
      if (
        selectedWords.slice(i, i + categoryArray.length).join(",") ===
        categoryArray.join(",")
      ) {
        i += categoryArray.length;
      } else {
        result.push(selectedWords[i]);
        i++;
      }
    }
    setSelectedWords(result);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      // console.log(event.key);
      const isLetter = /[a-z]$/i.test(event.key);
      if (activeModal) {
        return;
      }
      if (event.key == "Backspace") {
        setCurrentInputs((prev) => prev.slice(0, -1));
        return;
      }
      if (event.key == "Escape") {
        setIsOpen(false);
      }
      if (event.key == "Enter") {
        event.preventDefault();
        if (isOpen) {
          handleNewWord();
        }
        if (currentInputs.length === correctWord.length && !isOpen) {
          testAnswer();
        }
        return;
      }
      if (currentInputs.length >= correctWord.length) {
        return;
      }
      if (event.key.length > 1 || isLocked) {
        return;
      }
      if (isLetter) {
        setCurrentInputs((prev) => [...prev, event.key.toLowerCase()]);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentInputs, correctWord, isOpen, activeModal]);

  useEffect(() => {
    if (!isLoggedIn) {
      setScore(0);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const usedLetters = submissions.flatMap((submission) => {
      return submission.map((input) => {
        return input.letter;
      });
    });

    setRemainingLetters(
      ALPHABET_ARRAY.filter((letter) => {
        return !usedLetters.includes(letter);
      }).join(" ")
    );
  }, [submissions]);

  useEffect(() => {
    if (location.pathname !== oldLocation) {
      setSelectedWords([]);
      setPotentialWager(0);
      setScore(0);
      setCorrectWord("");
    }
    setOldLocation(location.pathname);
  }, [sideBarData]);

  // useEffect(() => {
  //   console.log("Selected Words: ", selectedWords);
  // }, [selectedWords]);

  // useEffect(() => {
  //   console.log("potentialWager: ", potentialWager);
  // }, [potentialWager]);

  // useEffect(() => {
  //   console.log("Correct Word: ", correctWord);
  // }, [correctWord]);

  return (
    <>
      <section className="wordle">
        <SideBar
          addCategory={addCategory}
          removeCategory={removeCategory}
          sideBarData={sideBarData}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
          increasePotentialWager={increasePotentialWager}
          decreasePotentialWager={decreasePotentialWager}
        />
        <Grid
          isGrid={isGrid}
          correctWord={correctWord}
          currentInputs={currentInputs}
          currentAttempt={currentAttempt}
          submissions={submissions}
        />
        <WordleTools
          currentAttempt={currentAttempt}
          handleNewWordClick={handleNewWordClick}
          remainingLetters={remainingLetters}
          score={score}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
          highScoreName={highScoreName}
        />
      </section>
      <Popup
        isOpen={isOpen}
        isWin={isWin}
        correctWord={correctWord}
        onClick={handleNewWord}
        onClose={closePopup}
      />
    </>
  );
}

export default Wordle;
