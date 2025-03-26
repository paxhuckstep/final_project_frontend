export const getPokemon = (generation) => {
  return fetch(`https://pokeapi.co/api/v2/generation/${generation}/`).then(
    checkResponse
  );
};
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error ${res.status}`);
}

// export const filterPokemonData = (data) => {
//   return data.pokemon_species.map((pokemon) => {
//     return pokemon.name
//       .toLowerCase()
//       .split("")
//       .filter((letter) => {
//         return /[a-z]$/i.test(letter);
//       })
//       .join("");
//   });
// };

const numberStrings = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

export const filterPokemonData = (data) => {
  return data.pokemon_species.map((pokemon) => {
    return pokemon.name
      .toLowerCase()
      .split("")
      .map((character) => {
        if (!isNaN(character)) {
          return numberStrings[Number(character)];
        }
        return character;
      })
      .join("")
      .split("")
      .filter((letter) => {
        return /[a-z]$/i.test(letter);
      })
      .join("");
  });
};
