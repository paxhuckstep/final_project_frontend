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
  const result = {};
  result.array = data.pokemon_species;
  return result;
};

export const flatenPokemonData = (data) => {
  data.map((pokemon) => {
    return pokemon.name;
  });
};
