import React, { useState } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Button, Drawer } from "@mui/material";
import { OrderList } from "../../../components/OrderList";

export function DrawerPhone() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Drawer anchor="bottom" open={isOpen} onClose={() => setIsOpen(false)}>
        <OrderList />
      </Drawer>
      <Button
        variant={"contained"}
        onClick={() => setIsOpen(true)}
        startIcon={<ShoppingBasketIcon />}
        sx={{
          display: {
            xs: "inline-flex",
            md: "none",
            position: "sticky",
            bottom: 0,
          },
          width: "100%",
        }}
      >
        Cart
      </Button>
    </>
  );
}
