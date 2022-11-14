import React, { useContext } from "react";
import { createContext, useReducer } from "react";
import {reducer} from './Reducer'

export const AppState = createContext();

const initialState = {
  count: 0,
  price:0,
  discount:0,
  itemName: "",
  cartNumber:"",
  positive:false
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
