import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Shirts from "./Pages/ShirtPage/ShirtPage";
import Nav from "./Components/Header/Nav";

const Cardarr = [
  {
    company: "HIGHLANDER",
    name: "Slim Fit Causual Shirt",
    price: 629,
    type: "boys",
    mrp: 1049,
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/147a0179-be1b-4c00-80fb-6eba0ecbdbb31585905051158HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/f7d5991f-9b9a-4a2d-915d-8b6da08da8ca1585905051230HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt3.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/9f896858-2c78-4a94-b93c-0a6b32f6e8721585905051288HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt4.jpg",
    ],
    rating: 4,
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/11591b03-97f1-4907-b735-906984c4bcd61585905051096HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt1.jpg",
  },
  {
    company: "BENE KLEED",
    name: "Men Slim Fit Causual Shirt",
    price: 671,
    type: "men",
    mrp: 2099,
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7189947/2018/8/30/aeb3002c-0114-4a6f-9509-d36adae2234d1535614137725-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7189947/2018/8/30/7d6de012-d553-418d-99b6-eb28c945fb7f1535614137786-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-3.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7189947/2018/8/30/154d65ba-6a66-4b09-9077-621c5cfca09b1535614137811-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7189947/2018/8/30/9aa32320-7ff7-467a-a6c3-9b30fa14985b1535614137764-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-4.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7189947/2018/8/30/b0a17130-00b2-47dd-9acf-75fcdf7333111535614137835-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-1.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7189947/2018/8/30/aeb3002c-0114-4a6f-9509-d36adae2234d1535614137725-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7189947/2018/8/30/7d6de012-d553-418d-99b6-eb28c945fb7f1535614137786-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-3.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7189947/2018/8/30/9aa32320-7ff7-467a-a6c3-9b30fa14985b1535614137764-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-4.jpg",
    ],
    rating: 4,
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/7189947/2018/8/30/b0a17130-00b2-47dd-9acf-75fcdf7333111535614137835-Bene-Kleed-Men-Off-White--Blue-Slim-Fit-Printed-Casual-Shirt-3181535614137565-1.jpg",
  },
  {
    company: "HERE&NOW",
    name: "Checked Sraight Shirt",
    price: 999,
    type: "men",
    mrp: 1999,
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/147a0179-be1b-4c00-80fb-6eba0ecbdbb31585905051158HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/f7d5991f-9b9a-4a2d-915d-8b6da08da8ca1585905051230HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt3.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/9f896858-2c78-4a94-b93c-0a6b32f6e8721585905051288HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt4.jpg",
    ],
    rating: 4,
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/5556054/2018/6/14/cf00c361-0c7f-444d-80fe-f599c4bade741528960783276-HERENOW-Men-Kurtas-7331528960782000-1.jpg",
  },
  {
    company: "HIGHLANDER",
    name: "Men Regular fit Causual Shirt",
    price: 562,
    type: "men",
    mrp: 1249,
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/147a0179-be1b-4c00-80fb-6eba0ecbdbb31585905051158HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/f7d5991f-9b9a-4a2d-915d-8b6da08da8ca1585905051230HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt3.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/9f896858-2c78-4a94-b93c-0a6b32f6e8721585905051288HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt4.jpg",
    ],
    rating: 4.2,
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2020/6/25/35324b4a-2c1e-4899-a649-516890cb4eb51593037980768-1.jpg",
  },
  {
    company: "Trendyol",
    name: "Regular Fit Causual Shirts",
    price: 2099,
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/147a0179-be1b-4c00-80fb-6eba0ecbdbb31585905051158HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/f7d5991f-9b9a-4a2d-915d-8b6da08da8ca1585905051230HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt3.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/9f896858-2c78-4a94-b93c-0a6b32f6e8721585905051288HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt4.jpg",
    ],
    rating: 3,
    type: "women",
    mrp: 3499,
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16352450/2021/12/3/05bfef4a-505a-4ae1-8e1f-4d7f2fa448a91638512188963TrendyolWomenBlackBoxyCasualShirt1.jpg",
  },
  {
    company: "H&M",
    rating: 5,
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/147a0179-be1b-4c00-80fb-6eba0ecbdbb31585905051158HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/f7d5991f-9b9a-4a2d-915d-8b6da08da8ca1585905051230HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt3.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/9f896858-2c78-4a94-b93c-0a6b32f6e8721585905051288HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt4.jpg",
    ],
    name: "Women Long Oxford Shirt",
    price: 1499,
    type: "women",
    mrp: 1499,
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/15424050/2021/9/11/22b22529-161f-4b3d-8df2-7ef2a49491941631337451675LongOxfordshirt1.jpg",
  },
  {
    company: "JAINISH",
    name: "Men Pack of 2 Classic Shirts",
    price: 1221,
    rating: 4.5,
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/147a0179-be1b-4c00-80fb-6eba0ecbdbb31585905051158HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/f7d5991f-9b9a-4a2d-915d-8b6da08da8ca1585905051230HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt3.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/9f896858-2c78-4a94-b93c-0a6b32f6e8721585905051288HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt4.jpg",
    ],
    mrp: 2598,
    type: "men",
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/9342461/2019/5/21/6b1e14fa-5097-4cbc-b50e-e5909312819f1558422906291-JAINISH-Men-Pack-of-Two-Shirts-1971558422904933-1.jpg",
  },
  {
    company: "Hancock",
    rating: 3.5,
    name: "Pack of 2 solid formal Shirts",
    price: 1199,
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/147a0179-be1b-4c00-80fb-6eba0ecbdbb31585905051158HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/f7d5991f-9b9a-4a2d-915d-8b6da08da8ca1585905051230HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt3.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/9f896858-2c78-4a94-b93c-0a6b32f6e8721585905051288HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt4.jpg",
    ],
    mrp: 1999,
    type: "boys",
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2188022/2017/10/18/11508315123129-Hancock-Men-Shirts-2921508315122855-1.jpg",
  },
  {
    company: "Roadster",
    rating: 4,
    name: "Pack of two Slim Causual Fit",
    price: 2294,
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/147a0179-be1b-4c00-80fb-6eba0ecbdbb31585905051158HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/f7d5991f-9b9a-4a2d-915d-8b6da08da8ca1585905051230HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt3.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/9f896858-2c78-4a94-b93c-0a6b32f6e8721585905051288HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt4.jpg",
    ],
    mrp: 2699,
    type: "boys",
    img: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/2038068/2017/11/3/11509688615628-Roadster-Pack-of-2-Solid-Casual-Shirts-4501509688615429-1.jpg",
  },
  {
    company: "Hancock",
    name: "Pack of 2 solid formal Shirts",
    price: 1199,
    images: [
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/456b5475-dedf-459b-ae82-a839c20bd8101585905051410HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt6.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/3931e195-74a8-40ad-89a3-8e3bd8dad8b91585905051352HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt5.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/147a0179-be1b-4c00-80fb-6eba0ecbdbb31585905051158HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt2.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/f7d5991f-9b9a-4a2d-915d-8b6da08da8ca1585905051230HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt3.jpg",
      "https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11780968/2020/4/3/9f896858-2c78-4a94-b93c-0a6b32f6e8721585905051288HIGHLANDERMenGreenWhiteSlimFitPrintedCasualShirt4.jpg",
    ],
    rating: 4.5,
    type: "boys",
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
