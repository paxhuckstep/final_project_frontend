import { NUMBER_STRINGS } from "./constants";

export const getPokemon = (generation) => {
  return fetch(`https://pokeapi.co/api/v2/generation/${generation}/`).then(
    checkResponse
  );
};

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}

export const filterPokemonData = (data) => {
  return data.pokemon_species.map((pokemon) => {
    return pokemon.name
      .toLowerCase()
      .split("")
      .map((character) => {
        if (!isNaN(character)) {
          return NUMBER_STRINGS[Number(character)];
        }
        return character;
      })
      .filter((letter) => {
        return /[a-z]$/i.test(letter);
      })
      .join("");
  });
};
