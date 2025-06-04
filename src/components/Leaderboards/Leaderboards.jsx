import Leaderboard from "../Leaderboard/Leaderboard";
import "./Leaderboards.css";

function Leaderboards() {
  return (
    <div className="leaderboards">
      <h2 className="leaderboards__title">Leaderboards</h2>
      <Leaderboard
        leaderboardTitle={"Pokemon"}
        highScoreName={"pokemonHighScore"}
      />
      <Leaderboard
        leaderboardTitle={"Sports"}
        highScoreName={"sportsHighScore"}
      />
         <Leaderboard
        leaderboardTitle={"Miscellaneous"}
        highScoreName={"miscellaneousHighScore"}
      />
    </div>
  );
}

export default Leaderboards;
