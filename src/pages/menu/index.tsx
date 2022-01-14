//Components
import DishCard from "./DishCard";
import { Box, Container } from "@mui/material";
import { DrawerDesktop } from "./DrawerDesktop";
import { DrawerPhone } from "./DrawerPhone";
import * as Styled from "./style";
export default function Menu() {
  return (
    <Container maxWidth={false} disableGutters>
      <HeaderHero />
      <DrawerDesktop />
      <Container maxWidth={"xl"}>
        <Box paddingY={3} sx={Styled.DishCardList}>
          <DishCard />
          <DishCard />
          <DishCard />
          <DishCard />
        </Box>
        <DrawerPhone />
      </Container>
    </Container>
  );
}

function HeaderHero() {
  return <Box sx={Styled.HeaderHero} />
}
