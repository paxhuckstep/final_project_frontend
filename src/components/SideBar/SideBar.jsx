import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import {
  fiveLetters,
  sixLetters,
  // stateCapitals,
  usStates,
  randomWords
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
  //   const overlap = randomWords.filter((word) => {
  //     return fiveLetters.includes(word) || sixLetters.includes(word);
  //   });
  //   console.log(overlap);
  // }, [pokemonArray]);

  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Categories</h3>
      <div className="sidebar__container">
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
        categoryTitle={"Pokemon FROM API"}
        handleChecking={() => addCategory(pokemonArray)}
        handleUnchecking={() => removeCategory(pokemonArray)}
      />
      <ToggleSwitch
        categoryTitle={"US States"}
        handleChecking={() => addCategory(usStates)}
        handleUnchecking={() => removeCategory(usStates)}
      />
      <ToggleSwitch
        categoryTitle={"Random Words"}
        handleChecking={() => addCategory(randomWords)}
        handleUnchecking={() => removeCategory(randomWords)}
      />
      </div>
    </div>
  );
}

export default SideBar;
