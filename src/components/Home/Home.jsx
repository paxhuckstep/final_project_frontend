import { useEffect, useState } from "react";
import Grid from "../Grid/Grid";
import WordleTools from "../WordleTools/WordleTools";
import Popup from "../Popup/Popup";
import SideBar from "../SideBar/SideBar";
import "./Home.css";
import { ALPHABET_ARRAY } from "../../Utils/constants";
import { addSolvedWord, updateHighScore } from "../../Utils/api";
import { getToken } from "../../Utils/token";

function Home({
  currentUser,
  isLoggedIn,
  handleNewUserData,
  activeModal,
  genOne,
  genTwo,
  genThree,
  genFour,
  genFive,
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
    if (currentAttempt > 1) {
      setScore(0);
    }
  };

  const handleNewSolvedWord = (newSolvedWord) => {
    if (!currentUser.solvedWords.includes(newSolvedWord)) {
      //  this if doesn't work quite right
      // console.log("this is the first time solving this word!", newSolvedWord);
      const token = getToken();
      addSolvedWord(token, newSolvedWord)
        .then((newUserData) => {
          // console.log("addSolvedWord .then ran: ", newUserData);
          handleNewUserData(newUserData);
        })
        .catch((error) => console.error(error));
    }
  };

  const handleNewHighScore = () => {
    if (score > currentUser?.pokemonHighScore) {
      const token = getToken();
      updateHighScore(token, score)
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
    setSelectedWords((prev) =>
      prev.filter((word) => {
        return !categoryArray.includes(word);
      })
    );
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
    handleNewWord();
  }, []);

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

  // useEffect(() => {
  //   console.log("Selected Words: ", selectedWords);
  // }, [selectedWords]);
  // useEffect(() => {
  //   console.log("potentialWager: ", potentialWager);
  // }, [potentialWager]);

  useEffect(() => {
    console.log("Correct Word: ", correctWord);
  }, [correctWord]);

  return (
    <>
      <section className="home">
        <SideBar
          addCategory={addCategory}
          removeCategory={removeCategory}
          genOne={genOne}
          genTwo={genTwo}
          genThree={genThree}
          genFour={genFour}
          genFive={genFive}
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
        {/* <div className="delete__later">
          For testing, you can highlight inside the quotes for the answer: "
          <span className="delete__later-span">{correctWord}</span>"
        </div> */}
        <WordleTools
          currentAttempt={currentAttempt}
          handleNewWordClick={handleNewWordClick}
          remainingLetters={remainingLetters}
          score={score}
          currentUser={currentUser}
          isLoggedIn={isLoggedIn}
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

export default Home;
