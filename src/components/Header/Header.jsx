import NavBar from "../NavBar/NavBar";
import "./Header.css";

function Header({ currentAttempt, handleNewWord, remainingLetters }) {
  const attemptsLeft = 6 - currentAttempt;
  return (
    <div className="header">
      <h1 className="header__title">Pax's Wordle Thing</h1>
      <NavBar/>
    </div>
  );
}

export default Header;
