import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { data } from "./Products";
import { useGlobalContext } from "./Context";
import { Button } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";


function ItemDetail() {
  const { state, dispatch } = useGlobalContext();
  const { id } = useParams();
  const [products, setProducts] = useState(data);
  const [defaultState, setDefaultState] = useState({
    img: "",
    name: "",
    brand: "",
    paragraph: "",
    price: "",
    size: [],
  });

  useEffect(() => {
    const productID = products.map((item) => {
      if (item.product_id == id) {
        setDefaultState({
          img: item.product_image,
          name: item.product_name,
          brand: item.brand,
          price: item.product_price,
          paragraph:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, facere?",
          size: [item.size],
        });
      }
    });
  }, []);

  const discountedAmount = state.discount - state.price;

  return (
    <div className="flex flex-col md:flex-row justify-between md:justify-center align-middle text-left my-3 space-x-6 w-[80%] mx-auto">
      <div className="left w-[auto] h-[100%]">
        <img
          className="rounded-lg h-[300px] w-[300px]  md:h-[500px] md:w-[500px]"
          src={defaultState.img}
          alt="/"
        />
        <span>
          sizes available:
          {defaultState.size.map((item) => {
            return <button className="btn">{item[0]},{item[1]}</button>;
          })}
        </span>
      </div>
      <div className="right w-auto flex flex-col justify-center align-middle text-left">
        <span className="text-sm text-orange-700 font-semibold tracking-widest">
          {defaultState.brand}
        </span>
        <h1 className="text-black-800 w-[200px] md:w-[auto] text-xl md:text-3xl font-semibold my-1">
          {defaultState.name}
        </h1>
        <p className=" text-gray-600  w-[250px] ] md:w-96">
          {defaultState.paragraph}
        </p>
        <h4 className="text-black-800  font-semibold ">
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
        </h4>
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

export default ItemDetail;
