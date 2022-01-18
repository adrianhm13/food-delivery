import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../../context/CartContext";

//Components
import {
  Box,
  Button,
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

//Style
import * as Styled from "./style";

export type DishOptionsProps = {
  title: string;
  price: number;
  optionsDish: string[];
  onExpanded: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DishOptions(props: DishOptionsProps) {
  const { price, optionsDish, onExpanded, title } = props;

  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);
  const [options, setOptions] = useState<string[]>([]);

  const uniqueId = Math.random().toString(16).slice(2);

  const { dispatch } = useContext(CartContext);

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
        id: uniqueId,
        title: title,
        price: price,
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
    setTotal(price * quantity);
  }, [quantity, price]);

  return (
    <Box padding={1} bgcolor={"grey.200"}>
      <FormOptions
        uniqueId={uniqueId}
        handleSubmit={handleSubmit}
        optionsDish={optionsDish}
      />
      <Box sx={Styled.DishQuantity}>
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

export type FormOptionsProps = {
  optionsDish: string[];
  uniqueId: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function FormOptions(props: FormOptionsProps) {
  const { uniqueId, handleSubmit, optionsDish } = props;
  console.log(uniqueId);
  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel component="legend">Pick your options</FormLabel>
      <form id={uniqueId} onSubmit={handleSubmit}>
        <FormGroup row>
          {optionsDish.map((optionDish) => (
            <OptionCheckbox key={optionDish} optionDish={optionDish} />
          ))}
        </FormGroup>
      </form>
    </FormControl>
  );
}

type OptionCheckBoxProps = {
  optionDish: string;
};
function OptionCheckbox({ optionDish }: OptionCheckBoxProps) {
  return (
    <FormControlLabel
      control={
        <Checkbox onChange={(e) => e.stopPropagation()} name={optionDish} />
      }
      label={optionDish}
    />
  );
}
