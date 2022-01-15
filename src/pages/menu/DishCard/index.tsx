import React, { useState } from "react";

//Components
import { Box, Card, CardActionArea, CardMedia, Collapse } from "@mui/material";
import { DishInformation } from "./DishInformation";
import { DishOptions } from "./DishOptions";
//Icons

//Style
import * as Styled from "./style";

type ProductProps = {
  product: {
    title: string;
    id: string;
    description: string;
    image: string;
    options: string[];
    price: number;
  };
};

export default function DishCard({ product }: ProductProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card sx={Styled.Card}>
      <CardActionArea onClick={() => handleExpandClick()} component="div">
        <Box sx={Styled.CardContent}>
          <Box display={"flex"} flexDirection={"column"}>
            <DishInformation
              title={product.title}
              description={product.description}
              isExpanded={isExpanded}
            />
            <Collapse
              unmountOnExit
              onClick={(e) => e.stopPropagation()}
              in={isExpanded}
              timeout="auto"
            >
              <DishOptions
                title={product.title}
                price={product.price}
                optionsDish={product.options}
                onExpanded={setIsExpanded}
              />
            </Collapse>
          </Box>
          <CardMedia
            component="img"
            image={product.image}
            alt="food dish"
            sx={Styled.CardImage}
          />
        </Box>
      </CardActionArea>
    </Card>
  );
}
