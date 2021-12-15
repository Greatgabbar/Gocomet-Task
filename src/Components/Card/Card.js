import classes from "./Card.module.css";
import { useState, useEffect } from "react";
import { FontAwesomeIcon, FontAwesome } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
// import ReactCSSTransitionGroup from "react-transition-group";

const Card = ({ company, images, img, mrp, name, price }) => {
  const [hoverCard, setHoverCard] = useState(false);
  const [imageData, setImageData] = useState(img);
  const [interval, setIntervalData] = useState(null);
  const [activeClass, setActiveClass] = useState(null);

  let count = 0;
  useEffect(() => {
    let myInterval;
    if (hoverCard) {
      setIntervalData(
        setInterval(() => {
          if (count === images.length) {
            count = 0;
          }
          console.log(images[count]);
          setActiveClass(`hehe${count + 1}`);
          setImageData(images[count]);
          count++;
        }, 1000)
      );
    } else {
      console.log(123);
      setActiveClass("");
      setImageData(img);
      clearInterval(interval);
    }
  }, [hoverCard]);

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
        {/* <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        > */}
        <img src={imageData} />
        {hoverCard ? (
          <div className={`${classes.dots} ${classes[activeClass]}`}>
            {images.map((image) => {
              return <div className={classes.dot}></div>;
            })}
          </div>
        ) : (
          <></>
        )}
        <div className={classes.Similar}></div>
        {/* </ReactCSSTransitionGroup> */}
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
