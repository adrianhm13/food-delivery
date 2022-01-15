import BackgroundDesktop from "../../assets/pictures/menu-background.jpg";
import BackgroundPhone from "../../assets/pictures/menu-background-small.jpg";

export const HeaderHero = {
  backgroundImage: {
    xs: `url(${BackgroundPhone})`,
    md: `url(${BackgroundDesktop})`,
  },
  backgroundSize: "cover",
  backgroundPositionY: "60%",
  height: "200px",
} as const;

export const DishCardList = { paddingRight: { xs: "0", md: "300px" } }