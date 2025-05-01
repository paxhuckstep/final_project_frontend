import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./SideBar.css";

function SideBar({
  addCategory,
  removeCategory,
  // titleOne,
  // titleTwo,
  // titleThree,
  // titleFour,
  // titleFive,
  catagoryTitles,
  catagoryArrayOne,
  catagoryArrayTwo,
  catagoryArrayThree,
  catagoryArrayFour,
  catagoryArrayFive,
  currentUser,
  isLoggedIn,
  increasePotentialWager,
  decreasePotentialWager,
}) {
  const catagoryArrayOneSolved = currentUser?.solvedWords?.filter((word) => {
    return catagoryArrayOne.includes(word);
  });
  const catagoryArrayTwoSolved = currentUser?.solvedWords?.filter((word) => {
    return catagoryArrayTwo.includes(word);
  });
  const catagoryArrayThreeSolved = currentUser?.solvedWords?.filter((word) => {
    return catagoryArrayThree.includes(word);
  });
  const catagoryArrayFourSolved = currentUser?.solvedWords?.filter((word) => {
    return catagoryArrayFour.includes(word);
  });
  const catagoryArrayFiveSolved = currentUser?.solvedWords?.filter((word) => {
    return catagoryArrayFive.includes(word);
  });

  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Generations</h3>
      <div className="sidebar__container">
        <ToggleSwitch
          toggleTitle={catagoryTitles.one}
          handleChecking={() => {
            increasePotentialWager();
            addCategory(catagoryArrayOne);
          }}
          handleUnchecking={() => {
            decreasePotentialWager();
            removeCategory(catagoryArrayOne);
          }}
          catagorySolved={catagoryArrayOneSolved?.length}
          catagoryMax={catagoryArrayOne?.length}
          isLoggedIn={isLoggedIn}
        />
        {/* <p className="sidebar__progress">gja</p> */}
        <ToggleSwitch
          toggleTitle={catagoryTitles.two}
          handleChecking={() => {
            addCategory(catagoryArrayTwo);
            increasePotentialWager();
          }}
          handleUnchecking={() => {
            decreasePotentialWager();
            removeCategory(catagoryArrayTwo);
          }}
          catagorySolved={catagoryArrayTwoSolved?.length}
          catagoryMax={catagoryArrayTwo?.length}
          isLoggedIn={isLoggedIn}
        />
        <ToggleSwitch
          toggleTitle={catagoryTitles.three}
          handleChecking={() => {
            increasePotentialWager();
            addCategory(catagoryArrayThree);
          }}
          handleUnchecking={() => {
            decreasePotentialWager();
            removeCategory(catagoryArrayThree);
          }}
          catagorySolved={catagoryArrayThreeSolved?.length}
          catagoryMax={catagoryArrayThree?.length}
          isLoggedIn={isLoggedIn}
        />
        <ToggleSwitch
          toggleTitle={catagoryTitles.four}
          handleChecking={() => {
            increasePotentialWager();
            addCategory(catagoryArrayFour);
          }}
          handleUnchecking={() => {
            decreasePotentialWager();
            removeCategory(catagoryArrayFour);
          }}
          catagorySolved={catagoryArrayFourSolved?.length}
          catagoryMax={catagoryArrayFour?.length}
          isLoggedIn={isLoggedIn}
        />
        <ToggleSwitch
          toggleTitle={catagoryTitles.five}
          handleChecking={() => {
            increasePotentialWager();
            addCategory(catagoryArrayFive);
          }}
          handleUnchecking={() => {
            decreasePotentialWager();
            removeCategory(catagoryArrayFive);
          }}
          catagorySolved={catagoryArrayFiveSolved?.length}
          catagoryMax={catagoryArrayFive?.length}
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
