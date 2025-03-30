import { INPUT_ATTEMPTS } from "../../Utils/constants";
import InputRow from "../InputRow/InputRow";
import "./Grid.css";

function Grid({
  isGrid,
  correctWord,
  currentInputs,
  currentAttempt,
  submissions,
}) {
  if (!isGrid) {
    return (
      <div className="grid">
        <p className="grid__rules">Rules are in the "About" section.</p>
        <h3 className="grid__notice">
          To get started, select what generations you want to play, then click
          "New Pokemon".
        </h3>
      </div>
    );
  }

  return (
    <table>
    <tbody className="grid">
      {INPUT_ATTEMPTS.map((attempt) => {
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
    </tbody>
    </table>
  );
}

export default Grid;
