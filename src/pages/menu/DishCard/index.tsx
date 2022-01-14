import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/CartContext";

//Components
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardHeader,
  Collapse,
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  ButtonGroup,
} from "@mui/material";

//Icons
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//Style
import * as Styled from "./style";
import { ExpandMore } from "../style";

//Images
import TestPicture from "../../../assets/pictures/menu-background-small.jpg";

export type DishInformationProps = {
  isExpanded: boolean;
};

export type OptionsDishProps = {
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
    <Card sx={Styled.Card}>
      <CardActionArea onClick={() => handleExpandClick()} component="div">
        <Box sx={Styled.CardContent}>
          <Box display={"flex"} flexDirection={"column"}>
            <DishInformation isExpanded={isExpanded} />
            <Collapse
              unmountOnExit
              onClick={(e) => e.stopPropagation()}
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
            sx={Styled.CardImage}
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
      <Box marginTop={1} display={"flex"} flexDirection={"row"}>
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
  const [options, setOptions] = useState<string[]>([]);

  const uniqueId = Math.random().toLocaleString();

  //Test add item to cart
  const { state, dispatch } = useContext(CartContext);
  console.log(state);
  //
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    let optionsChoosen: string[] = [];
    for (let [key] of formData.entries()) {
      options.push(key);
    }
    setOptions(optionsChoosen);
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: 1,
        title: "DishTitle",
        price: priceTest,
        priceTotal: total,
        qty: quantity,
        options,
      },
    });
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
      <Box sx={Styled.QuantityDish}>
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
