import { useHistory } from "react-router-dom";

//Icons
import DeliveryDiningOutlinedIcon from "@mui/icons-material/DeliveryDiningOutlined";

//Components
import {Button, Grid, Link, Typography, Box, Fab, Container} from "@mui/material"
import NormalStepper from "../../components/Stepper";

//Images
import PictureBigSize from "../../assets/pictures/davide-cantelli-jpkfc5_d-DI-unsplash.jpg";
import PictureSmallSize from "../../assets/pictures/davide-cantelli-jpkfc5_d-DI-unsplash-small.jpg";
import Mockup from "../../assets/pictures/mockup-food-delivery2.png";

export default function Home() {
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          backgroundColor: "primary.main",
          textAlign: "center",
          paddingTop: 8,
        }}
      >
        <Typography
          paddingX={3}
          fontWeight={500}
          color="primary.contrastText"
          variant="h3"
          component="h1"
        >
          The food at your doorstep
        </Typography>
        <Typography
          paddingX={3}
          paddingBottom={3}
          fontWeight={200}
          color="primary.contrastText"
          variant="h4"
          component="h2"
        >
          Why starve when you have us
        </Typography>
      </Box>
      <BackgroundPresentation />
      <StepsOrder />
      <AppBox />
      <Footer />
    </Container>
  );
}

function BackgroundPresentation() {
  const history = useHistory();
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "75vh", md: "88vh" },
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          height: "20%",
          clipPath: "polygon(0 0, 0% 100%, 100% 0)",
          position: "absolute",
          top: "-1px",
        }}
      />
      <Box
        sx={{
          height: "100%",
          overflow: "hidden",
          backgroundImage: {
            xs: `url(${PictureSmallSize})`,
            sm: `url(${PictureSmallSize})`,
            md: `url(${PictureSmallSize})`,
            lg: `url(${PictureBigSize})`,
            xl: `url(${PictureBigSize})`,
          },
          backgroundSize: "cover",
          backgroundPositionY: "35%",
          textAlign: "center",
        }}
      >
        <Fab
          variant="extended"
          color="secondary"
          onClick={() => history.push("/menu")}
        >
          <DeliveryDiningOutlinedIcon sx={{ mr: 1 }} />
          Take Away!
        </Fab>
      </Box>
    </Box>
  );
}

function AppBox() {
  return (
    <Box
      paddingY={2}
      minHeight={"250px"}
      bgcolor={"primary.main"}
      textAlign={"center"}
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box
        paddingY={2}
        paddingX={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Typography variant="h3" component="h3" color={"primary.contrastText"}>
          Download our app
        </Typography>
        <Typography variant="h5" component="h3" color={"secondary.main"}>
          Get awesome discounts
        </Typography>
        <Button variant="contained" color="secondary">Download</Button>
      </Box>
      <img src={Mockup} alt="mockup app" />
    </Box>
  );
}

function StepsOrder() {
  return (
    <Box textAlign={"center"} paddingY={12} paddingX={1}>
      <Typography variant="h3" component="h3" color={"primary"}>
        Easy as ever
      </Typography>
      <Typography variant="subtitle1" component="h3" color={"secondary"} mb={3}>
        And even faster
      </Typography>
      <NormalStepper />
    </Box>
  );
}

function Footer() {
  const listLinks = [
    "Contact",
    "About",
    "Lorem Ipsum",
    "Find Us on Facebook",
    "Follow us on Twitter",
    "Follow us on Instagram",
    "Affiliate Program",
    "Careers",
    "FAQs",
    "Accesibility",
    "Terms of Use",
    "Privacy Policy and Rights",
    "Site map",
  ];

  return (
    <Box
      bgcolor={"secondary.main"}
      minHeight={"200px"}
      padding={5}
      textAlign="center"
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {listLinks.map((link) => (
          <Grid item key={link} xs={2} sm={4} md={4}>
            <Link href="#" underline="hover">
              {link}
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
