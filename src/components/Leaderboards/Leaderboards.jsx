import { useEffect, useState } from "react";
import { getLeaderboardData } from "../../Utils/api";
import Leaderboard from "../Leaderboard/Leaderboard";
import "./Leaderboards.css";

function Leaderboards() {
  const [pokemonLeaderboardData, setPokemonLeaderboardData] = useState([]);

  useEffect(() => {
    getLeaderboardData("pokemonHighScore")
      .then((data) => {
        setPokemonLeaderboardData(data);
      })
      .catch(console.error);
  }, []);
  
  return (
    <div className="leaderboards">
      <h2 className="leaderboards__title">Leaderboards</h2>
      <Leaderboard
        leaderboardTitle={"Pokemon High Scores"}
        leaderboardData={pokemonLeaderboardData}
        highScoreName={"pokemonHighScore"}
      />
    </div>
  );
}

export default Leaderboards;
