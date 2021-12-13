import { useState } from "react";
import Checkbox from "../Checkbox/Checkbox";
import classes from "./Filter.module.css";

const Filter = ({ shirts, setShirt }) => {
  const [radioData, setRadioData] = useState(null);
  const [temp, setTemp] = useState(shirts);
  const radioHandle = (e) => {
    console.log(e.target.value);
    setRadioData(e.target.value);
    const arr = temp.filter((data) => data.type === e.target.value);
    console.log(arr);
    setShirt(arr);
  };

  return (
    <div className={classes.Container}>
      <div className={classes.Gender} onChange={radioHandle}>
        <label className={classes.Types}>
          <input type="radio" value="men" name="gender" /> <p>Men</p>
        </label>
        <label className={classes.Types}>
          <input type="radio" value="women" name="gender" /> <p>Women</p>
        </label>
        <label className={classes.Types}>
          <input type="radio" value="boys" name="gender" /> <p>Boys</p>
        </label>
        <label className={classes.Types}>
          <input type="radio" value="girls" name="gender" /> <p>Girls</p>
        </label>
      </div>
      <div className={classes.Brand}>
        <div className={classes.Heading}>BRAND</div>
        <div className={classes.GG}>
          <Checkbox label="Roadster (2541)" />
          <Checkbox label="Blackberrys (1946)" />
          <Checkbox label="Allen Solly (1728)" />
          <Checkbox label="ColorPlus (1516)" />
        </div>
      </div>
      <div className={classes.Price}>
        <div className={classes.Heading}>PRICE</div>
        <div className={classes.GG}>
          <Checkbox label="Rs. 249 to Rs. 1086 (2410)" />
          <Checkbox label="Rs. 249 to Rs. 1086 (2410)" />
          <Checkbox label="Rs. 249 to Rs. 1086 (2410)" />
          <Checkbox label="Rs. 249 to Rs. 1086 (2410)" />
        </div>
      </div>
    </div>
  );
};
export default Filter;
