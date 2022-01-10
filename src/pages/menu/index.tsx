import Container from "@mui/material/Container";
import BackgroundMedium from "../../assets/pictures/menu-background.jpg";
import BackgroundSmall from "../../assets/pictures/menu-background-small.jpg";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
export default function Menu() {
  return (
    <Container maxWidth={false} disableGutters>
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
      <Drawer
        variant="permanent"
        anchor="right"
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <Box
          sx={{
            overflow: "auto",
            marginTop: "100px",
            maxWidth: "300px",
            padding: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          AABBBAABBBAABBBAABBBA
          AAABBBAABBBAABBBAABBBAAA
          AAABBBAABBBAABBBAABBBAAA
        </Box>
      </Drawer>
      <Container maxWidth={"lg"}>
        A
        <PhoneDrawer />
      </Container>
    </Container>
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
        startIcon={<ShoppingBasketIcon/>}
        sx={{
          display: {
            xs: "inline-flex",
            md: "none",
          },
          width: 1,
        }}
      >
        Cart
      </Button>
    </>
  );
}
