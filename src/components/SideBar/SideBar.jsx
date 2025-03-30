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
}) {
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
