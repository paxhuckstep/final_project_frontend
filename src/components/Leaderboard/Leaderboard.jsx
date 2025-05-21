import { useEffect, useState } from "react";
import { getLeaderboardData } from "../../Utils/api";
import "./Leaderboard.css";

function Leaderboard({ leaderboardTitle, highScoreName }) {
  const [leaderboardData, setLeaderboardData] = useState([]);
  useEffect(() => {
    getLeaderboardData(highScoreName)
      .then((data) => {
        setLeaderboardData(data);
      })
      .catch(console.error);
  }, []);

  //   console.log(leaderboardData);
  return (
    <table className="leaderboard">
      <caption className="leaderboard__caption">{leaderboardTitle}</caption>
      <thead className="leaderboard__head">
        <tr className="leaderboard__row">
          <th className="leaderboard__head-data">Rank</th>
          <th className="leaderboard__head-data">Username</th>
          <th className="leaderboard__head-data leaderboard__head-data_score">
            Score
          </th>
        </tr>
      </thead>
      <tbody className="leaderboard__body">
        {leaderboardData.map((leader, index) => {
          // console.log(highScoreName, leader)
          return (
            <tr className="leaderboard__row" key={index}>
              <td className="leaderboard__rank">{index + 1}</td>
              <td className="leaderboard__username">{leader?.username}</td>
              <td className="leaderboard__score">{leader[highScoreName]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Leaderboard;
