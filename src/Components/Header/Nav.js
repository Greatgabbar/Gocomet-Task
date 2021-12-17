import classes from "./Nav.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function findMatches(wordToMatch, shirts) {
  return shirts.filter((shirt) => {
    // here we need to figure out if the city or state matches what was searched
    const regex = new RegExp(wordToMatch, "gi");
    return shirt.company.match(regex) || shirt.name.match(regex);
  });
}

const Nav = ({ shirts, setShirts }) => {
  const [temp, setTemp] = useState(shirts);
  const changeHandle = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      return setShirts(temp);
    }
    const arr = findMatches(e.target.value, temp);
    setShirts(arr);
  };

  return (
    <div className={classes.Nav}>
      <div className={classes.Left}>
        {/* <div className={classes.logo}></div> */}
        <div className={classes.Links}>
          <img src={logo} alt="Myntra logo" />
          <Link to={"#"}>Men</Link>
          <Link to={"#"}>Women</Link>
          <Link to={"#"}>Kids</Link>
          <Link to={"#"}>Home & Living</Link>
          <Link to={"#"}>Beauty</Link>
        </div>
      </div>
      <div className={classes.Right}>
        <div className={classes.Search}>
          <div>
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input
            type="search"
            placeholder="Search for products, brands and more"
            onChange={changeHandle}
          />
        </div>
        <div className={classes.Icons}>
          <div>
            <FontAwesomeIcon icon={faUser} />
            <p>Profile</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faHeart} />
            <p>Wishlist</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faShoppingBag} />
            <p>Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
