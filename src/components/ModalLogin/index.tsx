import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "1px solid #eceff1",
  boxShadow: 24,
  width: { xs: "240px", sm: "400px" },
  p: 4,
  borderRadius: "5px",
};

type ModalLoginProps = {
  openLogin: boolean;
  onOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalLogin({
  openLogin,
  onOpenLogin,
}: ModalLoginProps) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClose = () => onOpenLogin(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openLogin}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={openLogin}>
        <Box sx={style}>
          <Typography
            id="transition-modal-title"
            variant="h5"
            component="h2"
            marginBottom={4}
          >
            Welcome back
          </Typography>
          <form id="login-form" onSubmit={(e) => handleSubmit(e)}>
            <Stack spacing={3}>
              <TextField
                id="outlined-email"
                label="Email"
                value={email}
                required
                type="email"
                color="secondary"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                id="outlined-password"
                label="Password"
                value={password}
                required
                type="password"
                color="secondary"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>
          </form>
          <Button
            sx={{ marginTop: 1 }}
            variant="contained"
            color="secondary"
            type="submit"
            form="login-form"
          >
            Signin
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}
