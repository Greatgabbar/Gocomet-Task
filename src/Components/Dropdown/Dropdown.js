import classes from "./Dropdown.module.css";
import { useEffect, useState } from "react";

import { FontAwesomeIcon, FontAwesome } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
const Dropdown = ({ list, title, shirts, setShirt, setTitle }) => {
  const [isListOpen, setListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState(title);

  useEffect(() => {
    setTitle(headerTitle);
  }, [headerTitle]);

  const hoverHandle = () => {
    setListOpen(true);
  };

  const hoverExitHandle = () => {
    setListOpen(false);
  };

  const selectItem = (item) => {
    setHeaderTitle(item.title);
    setListOpen(false);
  };

  return (
    <div
      className={classes.ddWrapper}
      onMouseOver={hoverHandle}
      onMouseLeave={hoverExitHandle}
    >
      <button
        type="button"
        className={classes.ddHeader}
        // onClick={this.toggleList}
      >
        <div className={classes.ddHeaderTitle}>
          Sort By : <span>{headerTitle}</span>
        </div>
        {isListOpen ? (
          <FontAwesomeIcon icon={faAngleUp} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faAngleDown} size="2x" />
        )}
      </button>
      {isListOpen && (
        <div role="list" className={classes.ddList}>
          {list.map((item) => (
            <button
              type="button"
              className={classes.ddListItem}
              key={item.id}
              onClick={() => selectItem(item)}
            >
              {item.title} {item.selected && <FontAwesomeIcon icon={faCheck} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
