import classes from "./Card.module.css";
import { useState } from "react";
import { FontAwesomeIcon, FontAwesome } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Card = ({ company, img, mrp, name, price }) => {
  const [hoverCard, setHoverCard] = useState(false);
  return (
    <div
      className={classes.Card}
      onMouseEnter={() => {
        setHoverCard(true);
      }}
      onMouseLeave={() => {
        setHoverCard(false);
      }}
    >
      <div className={classes.Image}>
        <img src={img} />
      </div>
      <div className={classes.Details}>
        {!hoverCard ? (
          <>
            <div className={classes.Company}>{company}</div>
            <div className={classes.Name}>{name}</div>
          </>
        ) : (
          <>
            <div className={classes.Wishlist}>
              <FontAwesomeIcon icon={faHeart} />
              <p>WISHLIST</p>
            </div>
            <div className={classes.Name}>
              Sizes: <span style={{ color: "#535766" }}>39, 40, 42, 44</span>{" "}
            </div>
          </>
        )}
        <div className={classes.Price}>
          <span style={{ fontWeight: "700" }}>Rs. {price}</span>
          <span
            style={{
              textDecoration: "line-through",
              fontSize: "12px",
              padding: "0px 8px",
            }}
          >
            Rs. {mrp}
          </span>
          <span style={{ color: "#ff905a", fontSize: "12px" }}>
            ({(((mrp - price) / mrp) * 100).toFixed(0)}%OFF)
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
