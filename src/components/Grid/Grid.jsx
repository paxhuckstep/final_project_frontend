import InputRow from "../InputRow/InputRow";
import "./Grid.css";

function Grid({
  isGrid,
  correctWord,
  currentInputs,
  currentAttempt,
  submissions,
}) {
  const inputAttempts = [1, 2, 3, 4, 5, 6];

  if (!isGrid) {
    return (
      <div className="grid">
        <p className="grid__rules">Rules are in the "About" section.</p>
        <h3 className="grid__notice">
          To get started, select what generations you want to play, then click "New Pokemon".
        </h3>
      </div>
    );
  }

  return (
    <div className="grid">
      {inputAttempts.map((attempt) => {
        return (
          <InputRow
            key={attempt}
            correctWord={correctWord}
            attemptRow={attempt}
            currentInputs={currentInputs}
            currentAttempt={currentAttempt}
            submissions={submissions}
          />
        );
      })}
    </div>
  );
}

export default Grid;
