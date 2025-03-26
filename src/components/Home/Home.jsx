import { useEffect, useState } from "react";
import Grid from "../Grid/Grid";
import HomeRight from "../HomeRight/HomeRight";
import Popup from "../Popup/Popup";
import SideBar from "../SideBar/SideBar";
import "./Home.css";

function Home({ activeModal }) {
  const [correctWord, setCorrectWord] = useState("");
  const [currentInputs, setCurrentInputs] = useState([]);
  const [currentAttempt, setCurrentAttempt] = useState(1);
  const [submissions, setSubmissions] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [isWin, setIsWin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isGrid, setIsGrid] = useState(false);
  const [remainingLetters, setRemainingLetters] = useState("");

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabet.split("");

  const testAnswer = () => {
    const correctWordGreenless = correctWord
      .split("")
      .filter((letter, index) => {
        return currentInputs[index] !== letter;
      });
    // console.log("correct word greenless: ", correctWordGreenless);

    let possibleYellowCount = Array(26).fill(0);

    correctWordGreenless.forEach((letter) => {
      possibleYellowCount[alphabetArray.indexOf(letter)]++;
    });
    // console.log("possible yellow count: ", possibleYellowCount);

    const newSubmission = currentInputs.map((letter, index) => {
      let isYellow = false;
      if (
        letter !== correctWord.charAt(index) &&
        correctWordGreenless.join("").includes(letter) &&
        possibleYellowCount[alphabetArray.indexOf(letter)] > 0
      ) {
        isYellow = true;
        possibleYellowCount[alphabetArray.indexOf(letter)]--;
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
    }
    setCurrentInputs([]);
  };

  const handleNewWord = () => {
    setCorrectWord(
      selectedWords[Math.floor(Math.random() * selectedWords.length)]
    );
    setSubmissions([]);
    setIsOpen(false);
    setIsWin(false);
    setCurrentAttempt(1);
    setCurrentInputs([]);
    if (selectedWords.length > 0) {
      setIsGrid(true);
    } else {
      setIsGrid(false);
    }
  };

  useEffect(() => {
    if (currentAttempt === 7) {
      setIsOpen(true);
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
      if (event.key.length > 1) {
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
      alphabetArray
        .filter((letter) => {
          return !usedLetters.includes(letter);
        })
        .join(" ")
    );
  }, [submissions]);

  useEffect(() => {
    console.log("Selected Words: ", selectedWords);
  }, [selectedWords]);

  useEffect(() => {
    console.log("Correct Word: ", correctWord);
  }, [correctWord]);

  return (
    <>
      <div className="home">
        <SideBar addCategory={addCategory} removeCategory={removeCategory} />
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
        <HomeRight
          currentAttempt={currentAttempt}
          handleNewWord={handleNewWord}
          remainingLetters={remainingLetters}
        />
      </div>
      <Popup
        isOpen={isOpen}
        isWin={isWin}
        correctWord={correctWord}
        onClick={handleNewWord}
      />
    </>
  );
}

export default Home;
