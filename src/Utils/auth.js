import { checkResponse } from "./pokeApi";
import { Base_Url } from "./constants";

export const register = (username, password) => {
  return fetch(`${Base_Url}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then(checkResponse);
};

export const authorize = (username, password) => {
  return fetch(`${Base_Url}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then(checkResponse);
};

export const getCurrentUser = (token) => {
  return fetch(`${Base_Url}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
};
