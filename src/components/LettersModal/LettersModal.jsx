import "./LettersModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function LettersModal({
  isOpen,
  onClose,
  setLettersRandom,
  setLettersManual,
  errorMessage,

}) {
  const [optionalLetters, setOptionalLetters] = useState("");
  const [requiredLetter, setRequiredLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(optionalLetters, requiredLetter)
    setLettersManual({ optionalLetters, requiredLetter }, resetValues);
  };
  const handleOptionalLettersChange = (e) => {
    setOptionalLetters(e.target.value);
  };
  const handleRequiredLetterChange = (e) => {
    setRequiredLetter(e.target.value);
  };
  const resetValues = () => {
    setOptionalLetters("");
    setRequiredLetter("");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWithForm
      title="Enter Letters"
      buttonText= { "Set Letters"}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSwitchSeen={false}
      onSwitch={setLettersRandom}
      switchText={"Random Letters"}
      errorMessage={errorMessage}
    >
      <label htmlFor="form-optionalLetters" className="modal__label">
        Optional Letters (7)
        <input
          type="text"
          name="optionalLetters"
          className="modal__input"
          id="form-optionalLetters"
          placeholder="optionalLetters"
          minLength="7"
          maxLength="7"
          required
          onChange={handleOptionalLettersChange}
          value={optionalLetters}
        />
      </label>
      <label htmlFor="requiredLetter" className="modal__label">
        Required Letter
        <input
          type="requiredLetter"
          name="requiredLetter"
          className="modal__input modal__input_last"
          id="requiredLetter"
          placeholder="requiredLetter"
          minLength="1"
          maxLength="1"
          required
          onChange={handleRequiredLetterChange}
          value={requiredLetter}
        />
      </label>
    </ModalWithForm>
  );
}

export default LettersModal;
