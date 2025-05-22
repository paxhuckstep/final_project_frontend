import { useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./SideBar.css";

function SideBar({
  addCategory,
  removeCategory,
  categoryTitles,
  categoryArrayOne,
  categoryArrayTwo,
  categoryArrayThree,
  categoryArrayFour,
  categoryArrayFive,
  currentUser,
  isLoggedIn,
  increasePotentialWager,
  decreasePotentialWager,
}) {
  const categoryArrayOneSolved = currentUser?.solvedWords?.filter((word) => {
    return categoryArrayOne.includes(word);
  });
  const categoryArrayTwoSolved = currentUser?.solvedWords?.filter((word) => {
    return categoryArrayTwo.includes(word);
  });
  const categoryArrayThreeSolved = currentUser?.solvedWords?.filter((word) => {
    return categoryArrayThree.includes(word);
  });
  const categoryArrayFourSolved = currentUser?.solvedWords?.filter((word) => {
    return categoryArrayFour.includes(word);
  });
  const categoryArrayFiveSolved = currentUser?.solvedWords?.filter((word) => {
    return categoryArrayFive.includes(word);
  });

//   useEffect(() => {
// console.log("categoryArrayOneSolved: ", categoryArrayOneSolved)
//   },[categoryArrayOneSolved])

  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Categories</h3>
      <div className="sidebar__container">
        <ToggleSwitch
          toggleTitle={categoryTitles.one}
          handleChecking={() => {
            increasePotentialWager();
            addCategory(categoryArrayOne);
          }}
          handleUnchecking={() => {
            decreasePotentialWager();
            removeCategory(categoryArrayOne);
          }}
          categorySolved={categoryArrayOneSolved?.length}
          categoryMax={categoryArrayOne?.length}
          isLoggedIn={isLoggedIn}
        />
        {/* <p className="sidebar__progress">gja</p> */}
        <ToggleSwitch
          toggleTitle={categoryTitles.two}
          handleChecking={() => {
            addCategory(categoryArrayTwo);
            increasePotentialWager();
          }}
          handleUnchecking={() => {
            decreasePotentialWager();
            removeCategory(categoryArrayTwo);
          }}
          categorySolved={categoryArrayTwoSolved?.length}
          categoryMax={categoryArrayTwo?.length}
          isLoggedIn={isLoggedIn}
        />
        <ToggleSwitch
          toggleTitle={categoryTitles.three}
          handleChecking={() => {
            increasePotentialWager();
            addCategory(categoryArrayThree);
          }}
          handleUnchecking={() => {
            decreasePotentialWager();
            removeCategory(categoryArrayThree);
          }}
          categorySolved={categoryArrayThreeSolved?.length}
          categoryMax={categoryArrayThree?.length}
          isLoggedIn={isLoggedIn}
        />
        <ToggleSwitch
          toggleTitle={categoryTitles.four}
          handleChecking={() => {
            increasePotentialWager();
            addCategory(categoryArrayFour);
          }}
          handleUnchecking={() => {
            decreasePotentialWager();
            removeCategory(categoryArrayFour);
          }}
          categorySolved={categoryArrayFourSolved?.length}
          categoryMax={categoryArrayFour?.length}
          isLoggedIn={isLoggedIn}
        />
        <ToggleSwitch
          toggleTitle={categoryTitles.five}
          handleChecking={() => {
            increasePotentialWager();
            addCategory(categoryArrayFive);
          }}
          handleUnchecking={() => {
            decreasePotentialWager();
            removeCategory(categoryArrayFive);
          }}
          categorySolved={categoryArrayFiveSolved?.length}
          categoryMax={categoryArrayFive?.length}
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
