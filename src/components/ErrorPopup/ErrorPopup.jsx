import "./ErrorPopup.css";

function ErrorPopup({ isOpen, errorMessage, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="error-popup">
      <h2 className="error-popup__title">There's a Problem</h2>
      <button onClick={onClose} type="button" className="error-popup__close" />
      <p className="error-popup__body">{errorMessage}</p>
      <button onClick={onClose} className="error-popup__button">
        Close
      </button>
    </div>
  );
}

export default ErrorPopup;
