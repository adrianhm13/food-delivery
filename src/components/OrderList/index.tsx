import React, { useContext, useEffect } from "react";
import {
  CartContext,
  ProductType,
  CartAction,
  CartState,
} from "../../context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import * as Styled from "./style";
import {
  List,
  Button,
  Box,
  Divider,
  ListItem,
  Typography,
  ButtonGroup,
} from "@mui/material";

type ItemCartProps = {
  orders: CartState;
  item: ProductType;
  dispatch: React.Dispatch<CartAction>;
};

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
      const total = orders.listItems.reduce(
        (acc: number, item: { qty: number; priceTotal: number }) => {
          return acc + item.priceTotal;
        },
        0
      );
      dispatch({ type: "UPDATE_TOTAL", payload: total });
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
          <ItemCart item={item} dispatch={dispatch} orders={orders} />
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

function ItemCart(props: ItemCartProps) {
  const { dispatch } = props;

  const handleDecrease = (id: number) => {
    const updatedListItems = [...props.orders.listItems].map((item) => {
      if (item.id === id) {
        item.qty = item.qty - 1;
        item.priceTotal = item.price * item.qty;
      }
      return item;
    });
    dispatch({ type: "DECREASE_QTY", payload: updatedListItems });
  };

  const handleIncrease = (id: number) => {
    const updatedListItems = [...props.orders.listItems].map((item) => {
      if (item.id === id) {
        item.qty = item.qty + 1;
        item.priceTotal = item.price * item.qty;
      }
      return item;
    });
    dispatch({ type: "INCREASE_QTY", payload: updatedListItems });
  };
  return (
    <ListItem divider sx={Styled.ListItem}>
      <Typography variant={"subtitle1"}>{props.item.title}</Typography>
      <Typography variant={"body2"} color="grey.500">
        {props.item.options.join(" ").toLowerCase()}
      </Typography>
      <Box sx={Styled.QuantityPrice}>
        <ButtonGroup variant="text" color="secondary" size="small">
          <Button onClick={() => handleDecrease(props.item.id)}>
            <RemoveIcon />
          </Button>
          <Button disabled>{props.item.qty}</Button>
          <Button onClick={() => handleIncrease(props.item.id)}>
            <AddIcon />
          </Button>
        </ButtonGroup>
        <Typography variant={"subtitle1"} color="secondary">
          ${props.item.priceTotal}.00
        </Typography>
      </Box>
    </ListItem>
  );
}
