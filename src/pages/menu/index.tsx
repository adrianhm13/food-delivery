import React, { useState } from "react";

//Components
import Container from "@mui/material/Container";
import BackgroundMedium from "../../assets/pictures/menu-background.jpg";
import BackgroundSmall from "../../assets/pictures/menu-background-small.jpg";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import TestPicture from "../../assets/pictures/menu-background-small.jpg";
import Collapse from "@mui/material/Collapse";
import { ExpandMore } from "./style";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
            display: "flex",
            flexDirection: "column",
          }}
        >
          AABBBAABBBAABBBAABBBA AAABBBAABBBAABBBAABBBAAA
          AAABBBAABBBAABBBAABBBAAA
        </Box>
      </Drawer>
      <Container maxWidth={"lg"}>
        <Box
          paddingY={3}
          sx={{
            paddingRight: {
              xs: "0",
              md: "300px",
            },
          }}
        >
          <DishCard />
        </Box>

        <PhoneDrawer />
      </Container>
    </Container>
  );
}

function DishCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <Card>
      <CardActionArea onClick={handleExpandClick}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardHeader
              title="Lorem ipsum dolor sit amet, consectetur adipiscing elitu"
              subheader="
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit sem in velit viverra, ut ultricies risus gravida. Nam convallis laoreet massa at facilisis. "
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Typography variant={"h5"} padding={2} color={"secondary"}>
                $12
              </Typography>
              <ExpandMore
                expand={isExpanded}
                aria-expanded={isExpanded}
                aria-label="show more"
              >
                <ExpandMoreIcon color={"secondary"} />
              </ExpandMore>
            </Box>
            <Collapse in={isExpanded} unmountOnExit>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              suscipit sem in velit viverra, ut ultricies risus gravida. Nam
              convallis laoreet massa at facilisis. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
            </Collapse>
          </Box>
          <CardMedia
            component="img"
            image={TestPicture}
            alt="food dish"
            sx={{
              width: {
                xs: "40%",
                md: "25%",
              },
            }}
          />
        </Box>
      </CardActionArea>
    </Card>
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
