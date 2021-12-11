import { useState } from "react";
import classes from "./Checkbox.module.css";

const Checkbox = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <label className={classes.label}>
        <input
          type="checkbox"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <svg
          className={`${classes.checkbox} ${
            isChecked ? `${classes.checkboxActive}` : ""
          }`}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke={isChecked ? "#fff" : "none"}
          />
        </svg>
        <p>{label}</p>
      </label>
    </div>
  );
};

export default Checkbox;
