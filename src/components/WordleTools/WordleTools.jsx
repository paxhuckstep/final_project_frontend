import "./WordleTools.css";

function WordleTools({
  currentAttempt,
  handleNewWordClick,
  remainingLetters,
  score,
  currentUser,
  isLoggedIn,
  highScoreName,
}) {
  const attemptsLeft = 7 - currentAttempt;
  const attemptMaybeS = attemptsLeft === 1 ? "attempt" : "attempts";
  // const highScoreTextContent = isLoggedIn
  //   ? score > currentUser?.pokemonHighScore ? "Old High Score: " :
  //   `High Score: `
  //   : "Log in to record high scores!";

  const highScoreTextContent = isLoggedIn
    ? `High Score: `
    : "Log in to record high scores!";
  const highScore = isLoggedIn ? `${currentUser?.[highScoreName]}` : "";
  const userName = isLoggedIn
    ? `Good luck ${currentUser?.username
        .charAt(0)
        .toUpperCase()}${currentUser?.username.slice(1)}!`
    : "";
  // useEffect(() => {
  //   console.log("highscore: ", currentUser.pokemonHighScore);
  // }, [currentUser.pokemonHighScore]);
  return (
    <div className="wordle-tools">
      <p className="wordle-tools__text">{userName}</p>
      <p className="wordle-tools__text">
        You have {attemptsLeft} {attemptMaybeS} left!
      </p>

      <div className="wordle-tools__letters-container">
        <p className="wordle-tools__letters-title">Unused Letters:</p>
        <p className="wordle-tools__letters">{remainingLetters}</p>
      </div>

      <p className="wordle-tools__text">
        Current Score: <span className="wordle-tools__score">{score}</span>
      </p>
      <p className="wordle-tools__text">
        {highScoreTextContent}
        <span className="wordle-tools__score">{highScore}</span>
      </p>

      <button
        onClick={handleNewWordClick}
        className="wordle-tools__reset-button"
      >
        New Word
      </button>
    </div>
  );
}

export default WordleTools;
