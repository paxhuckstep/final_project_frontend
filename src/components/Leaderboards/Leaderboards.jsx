import Leaderboard from "../Leaderboard/Leaderboard";
import "./Leaderboards.css";

function Leaderboards({ leaderboardsData }) {
  console.log(leaderboardsData);
  return (
    <div className="leaderboards">
      <h2 className="leaderboards__title">Leaderboards Section</h2>
      {/* <p className="leaderboards__description">Leaderboards coming soon!</p> */}
      <Leaderboard />
    </div>
  );
}

export default Leaderboards;
