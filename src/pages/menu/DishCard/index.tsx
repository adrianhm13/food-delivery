import React, { useContext, useEffect, useState } from "react";
import { CartContext} from "../../../context/CartContext";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import TestPicture from "../../../assets/pictures/menu-background-small.jpg";
import Collapse from "@mui/material/Collapse";
import { ExpandMore } from "../style";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import ButtonGroup from "@mui/material/ButtonGroup";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import * as Style from "./style";

type DishInformationProps = {
  isExpanded: boolean;
};

type OptionsDishProps = {
  priceTest: number;
  onExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function DishCard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const priceTest = 12;

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card sx={Style.Card}>
      <CardActionArea onClick={() => handleExpandClick()} component="div">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <DishInformation isExpanded={isExpanded} />
            <Collapse
              unmountOnExit
              onClick={(e) => {
                e.stopPropagation();
              }}
              in={isExpanded}
              timeout="auto"
            >
              <OptionsDish priceTest={priceTest} onExpanded={setIsExpanded} />
            </Collapse>
          </Box>
          <CardMedia
            component="img"
            image={TestPicture}
            alt="food dish"
            sx={{ width: { xs: "40%", md: "25%" } }}
          />
        </Box>
      </CardActionArea>
    </Card>
  );
}

function DishInformation({ isExpanded }: DishInformationProps) {
  return (
    <>
      <CardHeader
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elitu"
        subheader="
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit sem in velit viverra, ut ultricies risus gravida. Nam convallis laoreet massa at facilisis. "
      />
      <Box marginTop={1} sx={{ display: "flex", flexDirection: "row" }}>
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
    </>
  );
}

function OptionsDish({ priceTest, onExpanded }: OptionsDishProps) {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(priceTest);

  const uniqueId = Math.random().toLocaleString();

  //Test add item to cart
  const {state, dispatch} = useContext(CartContext)
  console.log(state)
  //
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    e.stopPropagation();
    e.preventDefault();
    for (let [key] of formData.entries()) {
      console.log(key); //add it to an array
    }
    console.log(total);
    console.log(quantity);
    onExpanded(!onExpanded);
  };

  const handleIncrement = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQty) => prevQty - 1);
  };

  //Update total price per product
  useEffect(() => {
    setTotal(priceTest * quantity);
  }, [quantity, priceTest]);

  return (
    <Box padding={1} bgcolor={"grey.200"}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Pick your options</FormLabel>
        <form id={uniqueId} onSubmit={handleSubmit}>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => e.stopPropagation()}
                  name="Without Fries"
                />
              }
              label="Without fries"
            />
            <FormControlLabel
              control={
                <Checkbox onChange={(e) => e.stopPropagation()} name="Lorem" />
              }
              label="Testing"
            />
            <FormControlLabel
              control={
                <Checkbox onChange={(e) => e.stopPropagation()} name="option" />
              }
              label="Another option"
            />
            <FormControlLabel
              control={
                <Checkbox onChange={(e) => e.stopPropagation()} name="more" />
              }
              label="And more options"
            />
          </FormGroup>
        </form>
      </FormControl>
      <Box sx={Style.QuantityDish}>
        <ButtonGroup variant="text" color="secondary">
          <Button onClick={() => handleDecrement()}>
            <RemoveIcon />
          </Button>
          <Button disabled>{quantity}</Button>
          <Button onClick={() => handleIncrement()}>
            <AddIcon />
          </Button>
        </ButtonGroup>
        <Button
          type="submit"
          form={uniqueId}
          variant="contained"
          color="secondary"
          fullWidth
        >
          {`$${total}.00`}
        </Button>
      </Box>
    </Box>
  );
}
