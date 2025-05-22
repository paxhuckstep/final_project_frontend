import { Base_Url } from "./constants";
import { checkResponse } from "./pokeApi";

function addSolvedWord(token, word) {
  return fetch(`${Base_Url}/solvedword/${word}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function updateHighScore (token, score, highScoreName) {
  return fetch(`${Base_Url}/highscore/${score}/${highScoreName}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify({ score })
  }).then(checkResponse);
}

function getLeaderboardData (highScoreName) {
  return fetch(`${Base_Url}/leaderboards/${highScoreName}`, {
    method: "GET",
  }).then(checkResponse);
}

export {
addSolvedWord,
updateHighScore,
getLeaderboardData
};
