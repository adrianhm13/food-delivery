//Types
import { CartState, CartAction } from "../../../context/CartContext";
import { ProductType } from "../../../types/ProductType";

//Icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

//Style
import * as Styled from "./style";

//Components
import { Button, Box, ListItem, Typography, ButtonGroup } from "@mui/material";

export type ItemCartProps = {
  orders: CartState;
  item: ProductType;
  dispatch: React.Dispatch<CartAction>;
};

export function ItemCart(props: ItemCartProps) {
  const { dispatch } = props;

  const handleDecrease = (id: string) => {
    const updatedListItems = [...props.orders.listItems].map((item) => {
      if (item.id === id) {
        item.qty = item.qty - 1;
        item.priceTotal = item.price * item.qty;
      }
      return item;
    });
    dispatch({ type: "DECREASE_QTY", payload: updatedListItems });
  };

  const handleIncrease = (id: string) => {
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
        {props.item.options.join(", ").toLowerCase()}
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
