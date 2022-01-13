export {}
// import { createContext, useReducer, useEffect } from "react";

// type CartState = {
//   total: number;
//   listItems: object[];
// };
// type CartAction = {
//     dispatch: React.Dispatch<{type: any, payload: any}>
//     type:
//       | "ADD_ITEM"
//       | "INCREASE_QTY"
//       | "DECREASE_QTY"
//       | "DELETE_ITEM"
//       | "UPDATE_TOTAL";
//     payload: number | object;

//   };

//   type CartContextType = {
//       total: number,
//       listItems: object[],
//       increaseQty: (id: string) => void
//   }
// type CartContextProviderProps = {
//   children: React.ReactNode;
// };
// export const CartContext = createContext<CartContextType | null>(null);

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

//   const addItem = ({ title, price, pic }, id) => {
//     const newItem = { id: id, title: title, price: price, qty: 1, pic: pic };
//     dispatch({ type: "ADD_ITEM", payload: newItem });
//   };
// type ID = {
//     id: number
// }

// type Test = {
//   type: string
// }
//   const increaseQty = (id) => {
//     const updatedListItems = [...state.listItems];
//     updatedListItems.map((item) => {
//       if (item.id === id) {
//         item.qty = item.qty + 1;
//       }
//       return true;
//     });
//     dispatch({ type: "INCREASE_QTY", payload: updatedListItems });
//   };
//   const decreaseQty = (id: ID) => {
//     const updatedListItems = [...state.listItems];
//     updatedListItems.map((item) => {
//       if (item.id === id) {
//         item.qty = item.qty - 1;
//       }
//       return true;
//     });
//     dispatch({ type: "DECREASE_QTY", payload: updatedListItems});
//   };

//   //If qty its 0, deletes the item
//   useEffect(() => {
//     const itemToDelete = state.listItems.find(
//       (item: { qty: number }) => item.qty === 0
//     );
//     if (itemToDelete) {
//       const updatedListItems = state.listItems.filter(
//         (item: object) => itemToDelete !== item
//       );
//       dispatch({ type: "DELETE_ITEM", payload: updatedListItems });
//     }
//   }, [state.listItems]);

//   // Update cart's total
//   useEffect(() => {
//     if (state.listItems.length !== 0) {
//       const total = state.listItems.reduce(
//         (acc: number, item: { qty: number; price: number }) => {
//           return acc + item.qty * item.price;
//         },
//         0
//       );
//       dispatch({ type: "UPDATE_TOTAL", payload: total });
//     }
//   }, [state.listItems]);

//   return (
//     <CartContext.Provider
//       value={{ ...state, addItem, increaseQty, decreaseQty }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }
