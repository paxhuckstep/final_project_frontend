import "./Leaderboard.css";

function Leaderboard() {

  return (
 <table className="leaderboard">
    <caption className="leaderboard__caption">Pokemon High Scores</caption>
    <thead className="leaderboard__head">
        <tr className="leaderboard__row">
            <th className="leaderboard__head-data">Rank #</th>
            <th className="leaderboard__head-data">Username</th>
            <th className="leaderboard__head-data">Score</th>
        </tr>
    </thead>
    <tbody className="leaderboard__body">
        <tr className="leaderboard__row">
            <td className="leaderboard__rank">1</td>
            <td className="leaderboard__username">personA</td>
            <td className="leaderboard__score">123</td>
        </tr>     <tr className="leaderboard__row">
            <td className="leaderboard__rank">2</td>
            <td className="leaderboard__username">personA</td>
            <td className="leaderboard__score">123</td>
        </tr>     <tr className="leaderboard__row">
            <td className="leaderboard__rank">3</td>
            <td className="leaderboard__username">personA</td>
            <td className="leaderboard__score">123</td>
        </tr>     <tr className="leaderboard__row">
            <td className="leaderboard__rank">4</td>
            <td className="leaderboard__username">personA</td>
            <td className="leaderboard__score">123</td>
        </tr>
    </tbody>
 </table>
  );
}

export default Leaderboard;
