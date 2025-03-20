export const getPokemon = () => {
  return fetch(`https://pokeapi.co/api/v2/generation/1/`).then(checkResponse);
};
function checkResponse(res) {
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
      .filter((letter) => {
        return /[a-z]$/i.test(letter);
      })
      .join("");
  });
};
