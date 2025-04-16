import "./WordleTools.css";

function WordleTools({ currentAttempt, handleNewWord, remainingLetters, score }) {
  const attemptsLeft = 7 - currentAttempt;
  const attemptMaybeS = attemptsLeft === 1 ? "attempt" : "attempts";
  return (
    <div className="wordle-tools">
      <p className="wordle-tools__attempts">
        You have {attemptsLeft} {attemptMaybeS} left!
      </p>
    
      <div className="wordle-tools__letters-container">
        <p className="wordle-tools__letters-title">Unused Letters:</p>
        <p className="wordle-tools__letters">{remainingLetters}</p>
      </div>
      <p className="wordle-tools__attempts">
        You're current score is {score}
      </p>
      <button onClick={handleNewWord} className="wordle-tools__reset-button">
        New Pokemon
      </button>
    </div>
  );
}

export default WordleTools;
