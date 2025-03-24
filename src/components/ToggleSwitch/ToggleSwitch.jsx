import { useState } from "react";
import "./ToggleSwitch.css";

function ToggleSwitch({
  categoryTitle,
  addCategory,
  removeCategory,
  categoryArray,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);

    if (checked) {
      addCategory(categoryArray);
    } else {
      removeCategory(categoryArray);
    }
  };
  return (
    <>
      <div className="toggle-switch">
        <p className="toggle-switch__title">{categoryTitle}</p>
        <label className="toggle-switch__switch">
          <input
            onChange={onChange}
            checked={isChecked}
            type="checkbox"
            className="toggle-switch__checkbox"
          />
          <span className="toggle-switch__circle"></span>
          <span className="toggle-switch__text toggle-switch__text_N">N</span>
          <span className="toggle-switch__text toggle-switch__text_Y">Y</span>
        </label>
      </div>
    </>
  );
}

export default ToggleSwitch;
