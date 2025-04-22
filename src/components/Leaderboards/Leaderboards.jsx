import Leaderboard from "../Leaderboard/Leaderboard";
import "./Leaderboards.css";

function Leaderboards({ pokemonLeaderboardData }) {
  console.log(pokemonLeaderboardData);
  return (
    <div className="leaderboards">
      <h2 className="leaderboards__title">Leaderboards Section</h2>
      {/* <p className="leaderboards__description">Leaderboards coming soon!</p> */}
      <Leaderboard leaderboardData={pokemonLeaderboardData} highScoreName={"pokemonHighScore"} />
    </div>
  );
}

export default Leaderboards;
