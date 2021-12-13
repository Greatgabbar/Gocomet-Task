import classes from "./Card.module.css";

const Card = ({ company, img, mrp, name, price }) => {
  return (
    <div className={classes.Card}>
      <div className={classes.Image}>
        <img src={img} />
      </div>
      <div className={classes.Details}>
        <div className={classes.Company}>{company}</div>
        <div className={classes.Name}>{name}</div>
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
