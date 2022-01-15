import React, { createContext, useReducer } from "react";

import { ProductType } from "../types/ProductType";

export type CartContextProviderProps = {
  children: React.ReactNode;
};
export type CartState = {
  total: number;
  listItems: ProductType[];
};
export type CartAction =
  | { type: "ADD_ITEM"; payload: ProductType }
  | { type: "INCREASE_QTY"; payload: ProductType[] }
  | { type: "DECREASE_QTY"; payload: ProductType[] }
  | { type: "DELETE_ITEM"; payload: ProductType[] }
  | { type: "UPDATE_TOTAL"; payload: number };

export type CartContextType = {
    state: CartState,
    dispatch: React.Dispatch<CartAction>
}
const initialValue:CartState = {
    total: 0,
    listItems: []
}
export const CartContext = createContext<CartContextType>({state: initialValue, dispatch: () => {}});

export const cartReducer = (state: CartState, action: CartAction) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log("items:", state);
      return { ...state, listItems: [...state.listItems, action.payload] };
    case "INCREASE_QTY":
      return { ...state, listItems: action.payload };
    case "DECREASE_QTY":
      return { ...state, listItems: action.payload };
    case "DELETE_ITEM":
      return { ...state, listItems: action.payload };
    case "UPDATE_TOTAL":
      return { ...state, total: action.payload };
    default:
      return state;
  }
};

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, initialValue);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
