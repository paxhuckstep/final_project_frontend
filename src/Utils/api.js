import { Base_Url, Dictionary_Url } from "./constants";
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

function isWordReal(word) {
  return fetch(`${Dictionary_Url}/${word}`, {
    method: "GET",
  }).then((res) => {
    console.log(res);

    if(res.status == 404) {
      return false
    }

    if(res.ok) {
      return true;
    }
  return res.json().then((err) => {
    // Throw an error with the backend message
    throw new Error(err.message || "Something went wrong");
  });

  });
}

export function checkResponseD(res) {
  if (res.ok) {
    return res.json();
  }
  // return Promise.reject(`Error ${res.status}`);
  return res.json().then((err) => {
    // Throw an error with the backend message
    throw new Error(err.message || "Something went wrong");
  });
}

export {
addSolvedWord,
updateHighScore,
getLeaderboardData,
isWordReal
};
