import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import {
  fiveLetters,
  //   originalPokemon,
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
  return (
    <div className="sidebar">

      <h3 className="sidebar__title">Categories</h3>
      <ToggleSwitch
        categoryTitle={"5 Letter Words"}
        addCategory={addCategory}
        removeCategory={removeCategory}
        categoryArray={fiveLetters}
      />
      <ToggleSwitch
        categoryTitle={"6 Letter Words"}
        addCategory={addCategory}
        removeCategory={removeCategory}
        categoryArray={sixLetters}
      />
      <ToggleSwitch
        categoryTitle={"Original 151 Pokemon"}
        addCategory={addCategory}
        removeCategory={removeCategory}
        categoryArray={pokemonArray}
      />
      <ToggleSwitch
        categoryTitle={"US States"}
        addCategory={addCategory}
        removeCategory={removeCategory}
        categoryArray={usStates}
      />
      <ToggleSwitch
        categoryTitle={"State Capitals"}
        addCategory={addCategory}
        removeCategory={removeCategory}
        categoryArray={stateCapitals}
      />
    </div>
  );
}

export default SideBar;
