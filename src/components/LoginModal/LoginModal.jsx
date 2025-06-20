import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

function LoginModal({
  isOpen,
  onClose,
  handleLogIn,
  openRegisterModal,
  errorMessage,
  isWaitingResponse,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogIn({ username, password }, resetValues);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const resetValues = () => {
    setUsername("");
    setPassword("");
  };

  if (!isOpen) {
    return null;
  }

  return (
    <ModalWithForm
      title="Log In"
      buttonText= {isWaitingResponse ? "Loading..." : "Log In"}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSwitchSeen={true}
      onSwitch={openRegisterModal}
      switchText={"or Sign Up"}
      errorMessage={errorMessage}
    >
      <label htmlFor="login-username" className="modal__label">
        Username
        <input
          type="text"
          name="username"
          className="modal__input"
          id="login-username"
          placeholder="Username"
          minLength="1"
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
          className="modal__input modal__input_last"
          id="password"
          placeholder="Password"
          minLength="2"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
