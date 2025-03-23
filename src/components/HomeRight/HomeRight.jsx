import "./HomeRight.css";

function HomeRight({ currentAttempt, handleNewWord, remainingLetters }) {
  const attemptsLeft = 7 - currentAttempt;
  const attemptMaybeS = attemptsLeft === 1 ? "attempt" : "attempts";
  return (
    <div className="home-right">
      <p className="home-right__attempts">
        You have {attemptsLeft} {attemptMaybeS} left!
      </p>
      <div className="home-right__letters-container">
        <p className="home-right__letters-title">Unused Letters:</p>
        <p className="home-right__letters">{remainingLetters}</p>
      </div>
      <button onClick={handleNewWord} className="home-right__reset-button">
        New Word
      </button>
    </div>
  );
}

export default HomeRight;
