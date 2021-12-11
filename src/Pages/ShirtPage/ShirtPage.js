import Filter from "../../Components/Filter/Filter";
import Tag from "../../Components/Tag/Tag";
import classes from "./ShirtPage.module.css";

const arr = [
  "Add-Ons",
  "Bundles",
  "Character",
  "Collar",
  "Contry of Origin",
  "Fabric",
];

const ShirtPage = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Pagination}>
        <p>
          {" "}
          Home / Clothing / <span>Shirts for Men & Women</span>{" "}
        </p>
      </div>
      <div className={classes.Cat}>
        <div className={classes.Pagination} style={{ fontSize: "16px" }}>
          <p>
            {" "}
            <span>Shirts For Men & Women</span> - 72673 items{" "}
          </p>
        </div>
      </div>
      <div className={classes.InnerDiv}>
        <div className={classes.FilterDiv}>
          <div className={classes.Filter}>
            <p>Filters</p>
          </div>
          <Filter />
        </div>
        <div className={classes.Shirts}>
          <div className={classes.Cont}>
            <div className={classes.Tag}>
              {arr.map((gg) => (
                <Tag name={gg} />
              ))}
              <span>+16 more</span>
            </div>
            <div className={classes.Recommend}>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShirtPage;
