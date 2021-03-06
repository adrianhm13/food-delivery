import { useLogin } from "../../hooks/useLogin";
import { useEffect, useState } from "react";

import { Backdrop, Box, Modal, Fade, Typography, Button } from "@mui/material";
import * as Styled from "./style";
import LoginForm from "./LoginForm";

type ModalLoginProps = {
  openLogin: boolean;
  onOpenLogin: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ModalLogin(props: ModalLoginProps) {
  const { openLogin, onOpenLogin } = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, error, login, isPending } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    if (user) {
      onOpenLogin(false);
    }
  }, [user, onOpenLogin]);

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openLogin}
      onClose={() => onOpenLogin(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={openLogin}>
        <Box sx={Styled.ModalLoginContent}>
          <Typography
            id="transition-modal-title"
            variant="h5"
            component="h2"
            marginBottom={4}
          >
            Welcome back
          </Typography>
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            error={error}
            handleSubmit={handleSubmit}
          />
          <Button
            sx={{ marginTop: 1 }}
            variant="contained"
            color="secondary"
            type="submit"
            form="login-form"
          >
            {isPending ? "Loading" : "Login"}
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}
