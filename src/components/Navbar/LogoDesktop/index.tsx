import Typography from "@mui/material/Typography";
import * as Styled from './style'

export default function LogoDesktop() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={Styled.Logo}
    >
      LOGO
    </Typography>
  );
}
