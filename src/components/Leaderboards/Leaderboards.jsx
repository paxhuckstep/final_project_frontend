import Leaderboard from "../Leaderboard/Leaderboard";
import "./Leaderboards.css";

function Leaderboards() {
  return (
    <div className="leaderboards">
      <h2 className="leaderboards__title">Leaderboards</h2>
      <Leaderboard
        leaderboardTitle={"Pokemon High Scores"}
        highScoreName={"pokemonHighScore"}
      />
      <Leaderboard
        leaderboardTitle={"Sports High Scores"}
        highScoreName={"sportsHighScore"}
      />
    </div>
  );
}

export default Leaderboards;
