import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Shirts from "./Pages/ShirtPage/ShirtPage";
import Nav from "./Components/Header/Nav";

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

function App() {
  const [shirts, setShirts] = useState(Cardarr);
  return (
    <BrowserRouter>
      <Nav setShirts={setShirts} shirts={shirts} />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ marginTop: "80px" }}>
              <h1>Welcome To Website hit to /shirts</h1>
              <Link to="/shirts">Click here </Link>
            </div>
          }
        ></Route>
        <Route path="/shirts" element={<Shirts shirtData={shirts} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
