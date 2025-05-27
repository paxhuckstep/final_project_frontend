import "./WordleTools.css";

function WordleTools({
  openLoginModal,
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
  const userName = isLoggedIn
    ? `Good luck ${currentUser?.username
        .charAt(0)
        .toUpperCase()}${currentUser?.username.slice(1)}!`
    : "";

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
      {isLoggedIn && (
        <p className="wordle-tools__text">
          High Score:
          <span className="wordle-tools__score">
            {currentUser?.[highScoreName]}
          </span>
        </p>
      )}

      {!isLoggedIn && (
        <p className="wordle-tools__text">
          <button
            onClick={openLoginModal}
            className="wordle-tools__text-button"
          >
            Log in
          </button>{" "}
          to record high scores.
        </p>
      )}

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
