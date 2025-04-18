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

function updateHighScore (token, score) {
  return fetch(`${Base_Url}/highscore/${score}`, {
    method: "PUT",
    headers: {
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ score })
  }).then(checkResponse);
}


export {
addSolvedWord,
updateHighScore
};
