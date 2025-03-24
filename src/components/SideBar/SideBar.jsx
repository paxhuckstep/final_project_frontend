import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import {
  fiveLetters,
  sixLetters,
  stateCapitals,
  usStates,
} from "../../Utils/constants";
import "./SideBar.css";
import { useEffect, useState } from "react";
import { filterPokemonData, getPokemon } from "../../Utils/pokeApi";

function SideBar({ addCategory, removeCategory }) {
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    getPokemon()
      .then((data) => {
        // console.log(data);
        const filteredPokemonData = filterPokemonData(data);
        // console.log(filteredPokemonData)
        setPokemonArray(filteredPokemonData);
      })

      .catch(console.error);
  }, []);

  // useEffect(() => {
  //   const overlap = pokemonArray.filter((pokemon) => {
  //     return fiveLetters.includes(pokemon);
  //   });
  //   console.log(overlap);
  // }, [pokemonArray]);

  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Categories</h3>
      <ToggleSwitch
        categoryTitle={"5 Letter Words"}
        handleChecking={() => addCategory(fiveLetters)}
        handleUnchecking={() => removeCategory(fiveLetters)}
      />
      <ToggleSwitch
        categoryTitle={"6 Letter Words"}
        handleChecking={() => addCategory(sixLetters)}
        handleUnchecking={() => removeCategory(sixLetters)}
      />
      <ToggleSwitch
        categoryTitle={"Original 151 Pokemon"}
        handleChecking={() => addCategory(pokemonArray)}
        handleUnchecking={() => removeCategory(pokemonArray)}
      />
      <ToggleSwitch
        categoryTitle={"US States"}
        handleChecking={() => addCategory(usStates)}
        handleUnchecking={() => removeCategory(usStates)}
      />
      <ToggleSwitch
        categoryTitle={"State Capitals"}
        handleChecking={() => addCategory(stateCapitals)}
        handleUnchecking={() => removeCategory(stateCapitals)}
      />
    </div>
  );
}

export default SideBar;
