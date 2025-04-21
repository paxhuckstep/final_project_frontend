import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./SideBar.css";

function SideBar({
  addCategory,
  removeCategory,
  genOne,
  genTwo,
  genThree,
  genFour,
  genFive,
  currentUser,
  isLoggedIn,
 increasePotentialWager,
  decreasePotentialWager,
}) {
  const genOneSolved = currentUser?.solvedWords?.filter((word) => {
    return genOne.includes(word);
  });
  const genTwoSolved = currentUser?.solvedWords?.filter((word) => {
    return genTwo.includes(word);
  });
  const genThreeSolved = currentUser?.solvedWords?.filter((word) => {
    return genThree.includes(word);
  });
  const genFourSolved = currentUser?.solvedWords?.filter((word) => {
    return genFour.includes(word);
  });
  const genFiveSolved = currentUser?.solvedWords?.filter((word) => {
    return genFive.includes(word);
  });

  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Generations</h3>
      <div className="sidebar__container">
        <ToggleSwitch
          toggleTitle={"Gen One"}
          handleChecking={() => {
           increasePotentialWager();
            addCategory(genOne);
          }}
          handleUnchecking={() => {
            decreasePotentialWager();
            removeCategory(genOne);
          }}
          catagorySolved={genOneSolved?.length}
          catagoryMax={genOne?.length}
          isLoggedIn={isLoggedIn}
        />
        {/* <p className="sidebar__progress">gja</p> */}
        <ToggleSwitch
          toggleTitle={"Gen Two"}
          handleChecking={() => {
            addCategory(genTwo);
           increasePotentialWager();
          }}
          handleUnchecking={() => {
            decreasePotentialWager();
            removeCategory(genTwo);
          }}
          catagorySolved={genTwoSolved?.length}
          catagoryMax={genTwo?.length}
          isLoggedIn={isLoggedIn}
        />
        <ToggleSwitch
          toggleTitle={"Gen Three"}
          handleChecking={() => {
           increasePotentialWager();
            addCategory(genThree);
          }}
          handleUnchecking={() => {
            decreasePotentialWager();
            removeCategory(genThree);
          }}
          catagorySolved={genThreeSolved?.length}
          catagoryMax={genThree?.length}
          isLoggedIn={isLoggedIn}
        />
        <ToggleSwitch
          toggleTitle={"Gen Four"}
          handleChecking={() => {
           increasePotentialWager();
            addCategory(genFour);
          }}
          handleUnchecking={() => {
            decreasePotentialWager();
            removeCategory(genFour);
          }}
          catagorySolved={genFourSolved?.length}
          catagoryMax={genFour?.length}
          isLoggedIn={isLoggedIn}
        />
        <ToggleSwitch
          toggleTitle={"Gen Five"}
          handleChecking={() => {
           increasePotentialWager();
            addCategory(genFive);
          }}
          handleUnchecking={() => {
            decreasePotentialWager();
            removeCategory(genFive);
          }}
          catagorySolved={genFiveSolved?.length}
          catagoryMax={genFive?.length}
          isLoggedIn={isLoggedIn}
        />
        {/* <ToggleSwitch
          toggleTitle={"6 Letter Words"}
          handleChecking={() => addCategory(sixLetters)}
          handleUnchecking={() => removeCategory(sixLetters)}
        />

        <ToggleSwitch
          toggleTitle={"US States"}
          handleChecking={() => addCategory(usStates)}
          handleUnchecking={() => removeCategory(usStates)}
        />
        <ToggleSwitch
          toggleTitle={"Random Words"}
          handleChecking={() => addCategory(randomWords)}
          handleUnchecking={() => removeCategory(randomWords)}
        /> */}
      </div>
    </div>
  );
}

export default SideBar;
