import Filter from "../../Components/Filter/Filter";
import Tag from "../../Components/Tag/Tag";
import classes from "./ShirtPage.module.css";
import { useEffect, useState } from "react";
import Dropdown from "../../Components/Dropdown/Dropdown";
import Card from "../../Components/Card/Card";

const arr = [
  "Add-Ons",
  "Bundles",
  "Character",
  "Collar",
  "Contry of Origin",
  "Fabric",
];

const Cardarr = [
  {
    company: "HERE&NOW",
    name: "Checked Sraight Shirt",
    price: 999,
    mrp: 1999,
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/5556054/2018/6/14/cf00c361-0c7f-444d-80fe-f599c4bade741528960783276-HERENOW-Men-Kurtas-7331528960782000-1.jpg",
  },
  {
    company: "Trendyol",
    name: "Regular Fit Causual Shirts",
    price: 2099,
    mrp: 3499,
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16352450/2021/12/3/05bfef4a-505a-4ae1-8e1f-4d7f2fa448a91638512188963TrendyolWomenBlackBoxyCasualShirt1.jpg",
  },
  {
    company: "H&M",
    name: "Women Long Oxford Shirt",
    price: 1499,
    mrp: 1499,
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15424050/2021/9/11/22b22529-161f-4b3d-8df2-7ef2a49491941631337451675LongOxfordshirt1.jpg",
  },
  {
    company: "JAINISH",
    name: "Men Pack of 2 Classic Shirts",
    price: 1221,
    mrp: 2598,
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/9342461/2019/5/21/6b1e14fa-5097-4cbc-b50e-e5909312819f1558422906291-JAINISH-Men-Pack-of-Two-Shirts-1971558422904933-1.jpg",
  },
  {
    company: "Hancock",
    name: "Pack of 2 solid formal Shirts",
    price: 1199,
    mrp: 1999,
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2188022/2017/10/18/11508315123129-Hancock-Men-Shirts-2921508315122855-1.jpg",
  },
  {
    company: "Roadster",
    name: "Pack of two Slim Causual Fit",
    price: 2294,
    mrp: 2699,
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2038068/2017/11/3/11509688615628-Roadster-Pack-of-2-Solid-Casual-Shirts-4501509688615429-1.jpg",
  },
  {
    company: "Hancock",
    name: "Pack of 2 solid formal Shirts",
    price: 1199,
    mrp: 1999,
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2188023/2017/10/18/11508315132609-Hancock-Men-Shirts-9361508315132383-1.jpg",
  },
];

const ShirtPage = ({ shirtData }) => {
  const [list, setList] = useState([
    {
      id: 0,
      title: "What's New",
      selected: false,
      key: "location",
    },
    {
      id: 1,
      title: "Popularity",
      selected: false,
      key: "location",
    },
    {
      id: 2,
      title: "Better Discount",
      selected: false,
      key: "location",
    },
    {
      id: 3,
      title: "Price : low to high",
      selected: false,
      key: "location",
    },
    {
      id: 4,
      title: "Price : high to low",
      selected: false,
      key: "location",
    },
    {
      id: 5,
      title: "Customer Rating",
      selected: false,
      key: "location",
    },
  ]);
  const [shirts, setShirt] = useState(shirtData);
  useEffect(() => {
    setShirt(shirtData);
  }, [shirtData]);
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
              <Dropdown list={list} title="Recommend" />
            </div>
          </div>
          <div className={classes.Cards}>
            {shirts.map((shirt) => {
              return (
                <Card
                  img={shirt.img}
                  company={shirt.company}
                  name={shirt.name}
                  price={shirt.price}
                  mrp={shirt.mrp}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShirtPage;
