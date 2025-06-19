import { useNavigate } from "react-router";
import "./ConfirmRouteChangePopup.css";

function ConfirmRouteChangePopup({ isOpen, location, onClose }) {
  const navigate = useNavigate();

  const locationText = location === "/" ? "home" : location.slice(1);

  const onConfirm = () => {
    navigate(location);
    onClose();
  };
  if (!isOpen) {
    return null;
  }

  return (
    <div className="popup-route-change">
      <h2 className="popup-route-change__title">Warning!</h2>
      <button
        onClick={onClose}
        type="button"
        className="popup-route-change__close"
      />
      <p className="popup-route-change__body">
        Switching to {locationText} will set your current score to 0. Are you
        sure you want to do that?
      </p>
      <div className="popup-route-change__buttons-container">
        <button onClick={onConfirm} className="popup-route-change__button">
          Yes
        </button>
        <button onClick={onClose} className="popup-route-change__button">
          No
        </button>
      </div>
    </div>
  );
}

export default ConfirmRouteChangePopup;
