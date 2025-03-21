import "./HomeRight.css";

function HomeRight({ currentAttempt, handleNewWord, remainingLetters }) {
  const attemptsLeft = 6 - currentAttempt;
  return (
    <div className="HomeRight">
      <p className="HomeRight__attempts">
        You have {attemptsLeft} attempts left!
      </p>
      <button onClick={handleNewWord} className="HomeRight__reset-button">New word</button>
      <p className="HomeRight__letters-title">Unused letters:</p>
      <p className="HomeRight__letters">{remainingLetters}</p>
    </div>
  );
}

export default HomeRight;
