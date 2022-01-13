export{}

// import React, { createContext, useReducer } from "react";

// type CartContextProviderProps = {
//   children: React.ReactNode;
// };
// type ProductType = {
//   id: number;
//   title: string;
//   pic: string;
//   price: number;
//   qty: number;
// };
// type CartState = {
//   total: number;
//   listItems: ProductType[];
// };
// type CartAction =
//   | { type: "ADD_ITEM"; payload: ProductType }
//   | { type: "INCREASE_QTY"; payload: ProductType[] }
//   | { type: "DECREASE_QTY"; payload: ProductType[] }
//   | { type: "DELETE_ITEM"; payload: ProductType[] }
//   | { type: "UPDATE_TOTAL"; payload: number };

// export const CartContext = createContext<
//   | {
//       state: CartState;
//       dispatch: React.Dispatch<CartAction>;
//     }
//   | CartState
// >({ total: 0, listItems: [] });

// export const cartReducer = (state: CartState, action: CartAction) => {
//   switch (action.type) {
//     case "ADD_ITEM":
//       return { ...state, listItems: [...state.listItems, action.payload] };
//     case "INCREASE_QTY":
//       return { ...state, listItems: action.payload };
//     case "DECREASE_QTY":
//       return { ...state, listItems: action.payload };
//     case "DELETE_ITEM":
//       return { ...state, listItems: action.payload };
//     case "UPDATE_TOTAL":
//       return { ...state, total: action.payload };
//     default:
//       return state;
//   }
// };

// export function CartContextProvider({ children }: CartContextProviderProps) {
//   const [state, dispatch] = useReducer(cartReducer, {
//     total: 0,
//     listItems: [],
//   });

//   return (
//     <CartContext.Provider value={{ state, dispatch }}>
//       {children}
//     </CartContext.Provider>
//   );
// }
