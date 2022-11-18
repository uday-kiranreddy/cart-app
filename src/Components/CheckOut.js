import React from "react";
import { useGlobalContext } from "../AppContext/Context";
import DeleteIcon from "@mui/icons-material/Delete";
import { Avatar } from "@mui/material";

function CheckOut() {
  const { state, dispatch } = useGlobalContext();
  const { checkOutItems } = state;
  return (
    <>
      <h3 className="flex justify-center">Shopping Cart </h3>
      <div className="checkout_items my-3 w-[80%] mx-auto">
        <div className="hidden md:grid  grid-cols-4 text-center">
          <h3>Item Name</h3>
          <h3>Quantity</h3>
          <h3>Price</h3>
          <h3>Sub total</h3>
        </div>
        <hr />
        {checkOutItems.map((item) => {
          const { name, price, count, image, brand } = item;
          return (
            <>             
              <div className="checkout_item grid grid-cols-1 text-left md:text-center align-middle md:grid-cols-4 my-4">
                <div className="flex justify-between w-[100%] align-middle text-center md:text-center">
                  <Avatar src={image} />
                  <span className="text-black font-bold">{name}</span>
                </div>
                <div className="flex justify-center align-middle text-center">
                  <span>{count}</span>
                </div>

                <h4>${price}</h4>
                <h4>
                  ${price * count}.00
                 
                </h4>
              </div>
            </>
          );
        })}
        
      </div>
    </>
  );
}

export default CheckOut;
