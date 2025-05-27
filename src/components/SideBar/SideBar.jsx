import { useEffect } from "react";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import "./SideBar.css";

function SideBar({
  addCategory,
  removeCategory,
  sideBarData,
  currentUser,
  isLoggedIn,
  increasePotentialWager,
  decreasePotentialWager,
}) {
  return (
    <div className="sidebar">
      <h3 className="sidebar__title">Categories</h3>
      <div className="sidebar__container">
        {sideBarData.map((category, index) => {
          const categorySolved = currentUser?.solvedWords?.filter((word) => {
            return category.words.includes(word);
          });
          return (
            <ToggleSwitch
              key={index}
              toggleTitle={category.title}
              handleChecking={() => {
                increasePotentialWager();
                addCategory(category.words);
              }}
              handleUnchecking={() => {
                decreasePotentialWager();
                removeCategory(category.words);
              }}
              categorySolved={categorySolved?.length}
              categoryMax={category.words.length}
              isLoggedIn={isLoggedIn}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SideBar;
