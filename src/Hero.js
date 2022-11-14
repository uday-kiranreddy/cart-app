import { useState, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Button } from "@mui/material";
// hero images
import heroImage1 from "./images/image-product-1.jpg";
import heroImage2 from "./images/image-product-2.jpg";
import heroImage3 from "./images/image-product-3.jpg";
import heroImage4 from "./images/image-product-4.jpg";
import { useGlobalContext } from "./Context";
function Hero() {
  const { state, dispatch } = useGlobalContext();
  const [mainImage, setMainImage] = useState(heroImage1);

  const { positive } = state;
  // const displayDiscount = discount - price;

  //image clicker
  const handleClick = (e) => {
    const photoClicked = e.target.src;
    setMainImage(photoClicked);
  };

  const discountedAmount = state.discount - state.price;

  return (
    <div className="flex flex-col md:flex-row  justify-between align-middle text-left my-3 w-[80%] mx-auto">
      <div className="left m-2">
        <div className="hero__main__image  md:h-[400px]  md:w-[405px] md:ml-2">
          <img src={mainImage} className="rounded-lg" alt="" />
        </div>
        <div className="thumbnail__images flex justify-left p-2 space-y-2 space-x-2">
          <img
            src={heroImage1}
            onClick={(e) => handleClick(e)}
            className=" hover:border-orange-500/100  border-4 cursor-pointer rounded-md w-[55px] h-[55px] md:w-[95px] md:h-[100px]"
            alt=""
          />
          <img
            src={heroImage2}
            onClick={(e) => handleClick(e)}
            className=" hover:border-orange-500/100  cursor-pointer border-4 rounded-md w-[55px] h-[55px] md:w-[95px] md:h-[100px]"
            alt=""
          />
          <img
            src={heroImage3}
            onClick={(e) => handleClick(e)}
            className=" hover:border-orange-500/100 cursor-pointer border-4 rounded-md w-[55px] h-[55px] md:w-[95px] md:h-[100px]"
            alt=""
          />
          <img
            src={heroImage4}
            onClick={(e) => handleClick(e)}
            className=" hover:border-orange-500/100 cursor-pointer border-4 rounded-md w-[55px] h-[55px] md:w-[95px] md:h-[100px]"
            alt=""
          />
        </div>
      </div>
      <div className="right flex flex-col justify-center align-middle  text-middle m-3 h-auto w-[50%]">
        <span className="text-xs text-orange-700 font-semibold tracking-widest">
          SNEAKER COMPANY
        </span>
        <h1 className="text-black-800 w-[200px] md:w-[auto] text-xl md:text-5xl font-semibold my-1">
          Fall Limited Edition Sneakers
        </h1>
        <p className=" text-gray-600  w-[250px] ] md:w-96">
          Lorem, ipsum dolor sit amet consectetu ing elit. Maiores
          obcaecati minima iusto. Animi voluptates reiciendis nihil debitis,
          nobis nostrum soluta. Corporis.
        </p>
        <h2 className="text-black-800  font-semibold ">
          ${state.price}.00
          {state.price <= 0 ? (
            <span className="text-orange-700  text-sm bg-orange-200 rounded-md p-1 m-1">
              0%
            </span>
          ) : (
            <span className="text-orange-700  text-sm bg-orange-200 rounded-md p-1 m-1">
              50%
            </span>
          )}
        </h2>
        {state.count <= 0 ? (
          ""
        ) : (
          <h1 className=" w-70 md:w-80 py-1 text-base bg-green-500 rounded-md text-white md:px-2">{`🎉 you save ${discountedAmount} (50%) on this order 🥳`}</h1>
        )}
        <s className=" text-gray-600 py-1">${state.discount}</s>
        <div className="flex justify-left">
          <button
            className="md:px-3 md:m-1 btn"
            onClick={() => dispatch("DECREEMENT")}
          >
            <span className="text-orange-700">-</span>
          </button>
          <span className="text-black-800  font-semibold mt-8 md:mt-2.5 ">
            {state.count}
          </span>
          <button
            className="md:px-3 md:m-1  btn"
            onClick={() => dispatch("INCREEMENT")}
          >
            <span className="text-orange-700">+</span>
          </button>
          <Button
           
            onClick={() => dispatch("ADD_TO_CART")}
            variant="contained"
            style={{ backgroundColor: "orangered" }}
            className="btn none"
          >
            <ShoppingCartOutlinedIcon />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
