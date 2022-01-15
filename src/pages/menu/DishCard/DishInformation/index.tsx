import React from "react";
import { Box, Typography, CardHeader } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExpandMore } from "./style";

export type DishInformationProps = {
  isExpanded: boolean;
  title: string;
  description: string;
};

export function DishInformation({
  title,
  description,
  isExpanded,
}: DishInformationProps) {
  return (
    <>
      <CardHeader title={title} subheader={description} />
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
