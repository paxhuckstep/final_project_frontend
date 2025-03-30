import "./InputBox.css";

function InputBox({
  letterPosition,
  currentInput,
  isActive,
  attemptRow,
  currentAttempt,
  submissions,
}) {
  if (isActive) {
    return (
      <td className="box">
        <p className="box__input">{currentInput}</p>
      </td>
    );
  }
  if (currentAttempt > attemptRow) {
    const letter = submissions[attemptRow - 1][letterPosition].letter;
    const boxClassName = `box ${
      submissions[attemptRow - 1][letterPosition].boxClass
    } `;

    return (
      <td className={boxClassName}>
        <p className="box__input">{letter}</p>
      </td>
    );
  }

  return <td className="box"></td>;
}

export default InputBox;
