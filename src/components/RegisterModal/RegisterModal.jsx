import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function RegisterModal({
  isOpen,
  onClose,
  handleRegistration,
  openLoginModal,
  errorMessage,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetValues = () => {
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration({ username, password, confirmPassword }, resetValues);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      onClose={onClose}
      //   isOpen={isOpen}
      onSubmit={handleSubmit}
      isSwitchSeen={true}
      onSwitch={openLoginModal}
      switchText={"or Log In"}
      errorMessage={errorMessage}
    >
      <label htmlFor="username" className="modal__label">
        Username
        <input
          type="text"
          name="username"
          className="modal__input"
          id="username"
          placeholder="Username"
          minLength="1"
          maxLength="30"
          required
          onChange={handleUsernameChange}
          value={username}
        />
      </label>

      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password"
          name="password"
          className="modal__input"
          id="password"
          placeholder="Password"
          minLength="2"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <label htmlFor="confirm-password" className="modal__label">
        Confirm Password
        <input
          type="password"
          name="confirmPassword"
          className="modal__input modal__input_last"
          id="confirm-password"
          placeholder="Confirm password"
          minLength="2"
          required
          onChange={handleConfirmPasswordChange}
          value={confirmPassword}
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
