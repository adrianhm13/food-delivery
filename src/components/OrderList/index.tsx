import { useContext, useEffect } from "react";

//Types
import { CartContext } from "../../context/CartContext";

//Icons
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

//Style
import * as Styled from "./style";

//Components
import { List, Button, Divider, Typography } from "@mui/material";
import { ItemCart } from "./ItemCart";

export function OrderList() {
  const { state: orders, dispatch } = useContext(CartContext);
  const { listItems } = orders;

  //If qty its 0, deletes the item
  useEffect(() => {
    const itemToDelete = orders.listItems.find(
      (item: { qty: number }) => item.qty === 0
    );
    if (itemToDelete) {
      const updatedListItems = orders.listItems.filter(
        (item: object) => itemToDelete !== item
      );
      dispatch({ type: "DELETE_ITEM", payload: updatedListItems });
    }
  }, [orders.listItems, dispatch]);

  // Update cart's total
  useEffect(() => {
    if (orders.listItems.length !== 0) {
      const totalCart = orders.listItems.reduce(
        (acc: number, item: { qty: number; priceTotal: number }) => {
          return acc + item.priceTotal;
        },
        0
      );
      dispatch({ type: "UPDATE_TOTAL", payload: totalCart });
    }
  }, [orders.listItems, dispatch]);

  return (
    <List sx={Styled.ListContainer}>
      <Typography variant={"h6"} gutterBottom>
        Your order
      </Typography>
      <Divider />
      {listItems &&
        listItems.map((item) => (
          <ItemCart item={item} key={item.id} dispatch={dispatch} orders={orders} />
        ))}
      <Divider />
      <Button
        sx={{ mt: 1 }}
        startIcon={<ShoppingBasketIcon />}
        variant="contained"
      >
        Total ${orders.total}.00
      </Button>
    </List>
  );
}
