import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
// import {
//   // fiveLetters,
//   // sixLetters,
//   // // stateCapitals,
//   // usStates,
//   // randomWords,
// } from "../../Utils/constants";
import "./SideBar.css";
import { useEffect, useState } from "react";
import { filterPokemonData, getPokemon } from "../../Utils/pokeApi";

function SideBar({ addCategory, removeCategory }) {
  const [genOne, setGenOne] = useState([]);
  const [genTwo, setGenTwo] = useState([]);
  const [genThree, setGenThree] = useState([]);
  const [genFour, setGenFour] = useState([]);
  const [genFive, setGenFive] = useState([]);

  useEffect(() => {
    for (let i = 1; i < 6; i++) {
      getPokemon(i.toString())
        .then((data) => {
          const filteredPokemonData = filterPokemonData(data);
          switch (i) {
            case 1: {
              setGenOne(filteredPokemonData);
              break;
            }
            case 2: {
              setGenTwo(filteredPokemonData);
              break;
            }
            case 3: {
              setGenThree(filteredPokemonData);
              break;
            }
            case 4: {
              setGenFour(filteredPokemonData);
              break;
            }
            case 5: {
              setGenFive(filteredPokemonData);
              break;
            }
          }
        })
        .catch(console.error);
    }
  }, []);

  // useEffect(() => {
  //   const overlap = randomWords.filter((word) => {
  //     return fiveLetters.includes(word) || sixLetters.includes(word);
  //   });
  //   console.log(overlap);
  // }, [genOne]);

  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Generations</h3>
      <div className="sidebar__container">
        <ToggleSwitch
          categoryTitle={"Gen One"}
          handleChecking={() => addCategory(genOne)}
          handleUnchecking={() => removeCategory(genOne)}
        />
        <ToggleSwitch
          categoryTitle={"Gen Two"}
          handleChecking={() => addCategory(genTwo)}
          handleUnchecking={() => removeCategory(genTwo)}
        />
             <ToggleSwitch
          categoryTitle={"Gen Three"}
          handleChecking={() => addCategory(genThree)}
          handleUnchecking={() => removeCategory(genThree)}
        />
             <ToggleSwitch
          categoryTitle={"Gen Four"}
          handleChecking={() => addCategory(genFour)}
          handleUnchecking={() => removeCategory(genFour)}
        />
             <ToggleSwitch
          categoryTitle={"Gen Five"}
          handleChecking={() => addCategory(genFive)}
          handleUnchecking={() => removeCategory(genFive)}
        />
        {/* <ToggleSwitch
          categoryTitle={"6 Letter Words"}
          handleChecking={() => addCategory(sixLetters)}
          handleUnchecking={() => removeCategory(sixLetters)}
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
        /> */}
      </div>
    </div>
  );
}

export default SideBar;
