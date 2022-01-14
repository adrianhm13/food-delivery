import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Badge, Button, Drawer } from "@mui/material";
import { OrderList } from "../../../components/OrderList";
import * as Styled from "./style";

export function DrawerPhone() {
  const [isOpen, setIsOpen] = useState(false);
  const { state: orders } = useContext(CartContext);
  return (
    <>
      <Drawer anchor="bottom" open={isOpen} onClose={() => setIsOpen(false)}>
        <OrderList />
      </Drawer>
      <Button
        variant={"contained"}
        onClick={() => setIsOpen(true)}
        sx={Styled.CartButton}
      >
        <Badge badgeContent={orders.listItems.length} color="secondary">
          <ShoppingBasketIcon />
        </Badge>
        Cart
      </Button>
    </>
  );
}
