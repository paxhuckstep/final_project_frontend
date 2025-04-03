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
          toggleTitle={"Gen One"}
          handleChecking={() => addCategory(genOne)}
          handleUnchecking={() => removeCategory(genOne)}
        />
        <ToggleSwitch
          toggleTitle={"Gen Two"}
          handleChecking={() => addCategory(genTwo)}
          handleUnchecking={() => removeCategory(genTwo)}
        />
        <ToggleSwitch
          toggleTitle={"Gen Three"}
          handleChecking={() => addCategory(genThree)}
          handleUnchecking={() => removeCategory(genThree)}
        />
        <ToggleSwitch
          toggleTitle={"Gen Four"}
          handleChecking={() => addCategory(genFour)}
          handleUnchecking={() => removeCategory(genFour)}
        />
        <ToggleSwitch
          toggleTitle={"Gen Five"}
          handleChecking={() => addCategory(genFive)}
          handleUnchecking={() => removeCategory(genFive)}
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
