import React, { useContext } from "react";
import { createContext, useReducer } from "react";
import {reducer} from './Reducer'
import cartImage from "../images/image-product-1-thumbnail.jpg";


export const AppState = createContext();

const initialState = {
  img:cartImage,
  count: 0,
  price:0,
  discount:0,
  itemName: [],
  cartNumber:0,
  positive:false,
  productCount:0,
  productDiscount:999,
  checkOutItems:[  ],
  totalAmount:0
};

function Context({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <AppState.Provider value={{ state, dispatch }}>
      {children}
    </AppState.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppState);
};
export default Context;
