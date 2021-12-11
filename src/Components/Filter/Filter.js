import Checkbox from "../Checkbox/Checkbox";
import classes from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Gender}>
        <div className={classes.Types}>
          <input type="radio" value="Male" name="gender" /> <p>Men</p>
        </div>
        <div className={classes.Types}>
          <input type="radio" value="Male" name="gender" /> <p>Women</p>
        </div>
        <div className={classes.Types}>
          <input type="radio" value="Male" name="gender" /> <p>Boys</p>
        </div>
        <div className={classes.Types}>
          <input type="radio" value="Girls" name="gender" /> <p>Girls</p>
        </div>
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
