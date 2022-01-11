import React, { useState } from "react";

//Components
import Container from "@mui/material/Container";
import BackgroundMedium from "../../assets/pictures/menu-background.jpg";
import BackgroundSmall from "../../assets/pictures/menu-background-small.jpg";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import DishCard from "./DishCard";

export default function Menu() {
  return (
    <Container maxWidth={false} disableGutters>
      <HeaderBackground />
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{ display: { xs: "none", md: "block" } }}
      >
        <Box
          sx={{
            overflow: "auto",
            marginTop: "100px",
            maxWidth: "300px",
            padding: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          AABBBAABBBAABBBAABBBA AAABBBAABBBAABBBAABBBAAA
          AAABBBAABBBAABBBAABBBAAA
        </Box>
      </Drawer>
      <Container maxWidth={"xl"}>
        <Box paddingY={3} sx={{ paddingRight: { xs: "0", md: "300px" } }}>
          <DishCard />
          <DishCard />
        </Box>
        <PhoneDrawer />
      </Container>
    </Container>
  );
}

function HeaderBackground() {
  return (
    <Box
      sx={{
        backgroundImage: {
          xs: `url(${BackgroundSmall})`,
          md: `url(${BackgroundMedium})`,
        },
        backgroundSize: "cover",
        backgroundPositionY: "60%",
        height: "200px",
      }}
    />
  );
}

function PhoneDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Drawer anchor="bottom" open={isOpen} onClose={() => setIsOpen(false)}>
        <Box>A</Box>
      </Drawer>
      <Button
        variant={"outlined"}
        onClick={() => setIsOpen(true)}
        startIcon={<ShoppingBasketIcon />}
        sx={{ display: { xs: "inline-flex", md: "none" }, width: 1 }}
      >
        Cart
      </Button>
    </>
  );
}
