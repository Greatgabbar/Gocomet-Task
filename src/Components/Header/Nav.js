import classes from "./Nav.module.css";
import { Link } from "react-router-dom";
import logo from "../../../public/assets/images/logo.png";

const Nav = () => {
  return (
    <div className={classes.Nav}>
      <div className={classes.Right}>
        <div className={classes.logo}>
          <img src={logo} alt="Myntra logo" />
        </div>
        <div className={classes.Links}>
          <Link to={"#"}>Men</Link>
          <Link to={"#"}>Women</Link>
          <Link to={"#"}>Kids</Link>
          <Link to={"#"}>Home & Living</Link>
          <Link to={"#"}>Beauty</Link>
        </div>
      </div>
      <div>
        <div className={classes.Search}></div>
        <div className={classes.Icons}></div>
      </div>
    </div>
  );
};

export default Nav;
