import { Base_Url } from "./constants";
import { checkResponse } from "./pokeApi";

function addSolvedWord(userId, token, word) {
  return fetch(`${Base_Url}/solvedwords/${userId}/${word}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

function updateHighScore (userId, token, score) {
  return fetch(`${Base_Url}/highscore/${userId}/${score}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}


export {
addSolvedWord,
updateHighScore
};
