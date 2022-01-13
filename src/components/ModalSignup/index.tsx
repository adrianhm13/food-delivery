import { useSignup } from "../../hooks/useSignup";
import { useState } from "react";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import * as Style from "./style"

type ModalSignupProps = {
  openSignup: boolean;
  onOpenSignup: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalLogin({
  onOpenSignup,
  openSignup,
}: ModalSignupProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState('')

  const {error, signup} = useSignup()
  console.log('error', error)
  const handleClose = () => onOpenSignup(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(email, password, name)
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openSignup}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={openSignup}>
        <Box sx={Style.ModalContent}>
          <Typography
            id="transition-modal-title"
            variant="h5"
            component="h2"
            marginBottom={4}
          >
            Signup to get special discounts and follow your orders
          </Typography>
          <form autoComplete='off' id="login-form" onSubmit={(e) => handleSubmit(e)}>
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
                id="outlined-name"
                label="Name"
                value={name}
                type="text"
                required
                color="secondary"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                id="outlined-password"
                label="Password"
                value={password}
                required
                helperText={error}
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
            Signup
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}
