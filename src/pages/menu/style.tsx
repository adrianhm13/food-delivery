import { styled } from "@mui/material/styles";
import IconButton, {IconButtonProps} from "@mui/material/IconButton";
import BackgroundMedium from "../../assets/pictures/menu-background.jpg";
import BackgroundSmall from "../../assets/pictures/menu-background-small.jpg";

interface ExpandMoreProps extends IconButtonProps{
  expand: boolean;
}
export const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton disabled {...other}/>;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const HeaderHero = {
  backgroundImage: {
    xs: `url(${BackgroundSmall})`,
    md: `url(${BackgroundMedium})`,
  },
  backgroundSize: "cover",
  backgroundPositionY: "60%",
  height: "200px",
} as const;

export const DishCardList = { paddingRight: { xs: "0", md: "300px" } }