import classes from "./Tag.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Tag = ({ name }) => {
  return (
    <div className={classes.Tag}>
      <p>{name}</p>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  );
};

export default Tag;
