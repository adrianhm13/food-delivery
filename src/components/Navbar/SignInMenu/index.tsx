import React, { useState } from "react";

import ModalLogin from "../../ModalLogin";
import ModalSignup from "../../ModalSignup";
import { Menu, Button, MenuItem } from "@mui/material";

export default function SignInMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickLogin = () => {
    setAnchorEl(null);
    setOpenLogin(true);
  };
  const handleClickSignup = () => {
    setAnchorEl(null);
    setOpenSignup(true);
  };
  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        SignIn
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "basic-button" }}
      >
        <MenuItem onClick={handleClickLogin}>Login</MenuItem>
        <MenuItem onClick={handleClickSignup}>Signup</MenuItem>
      </Menu>
      {openLogin && (
        <ModalLogin openLogin={openLogin} onOpenLogin={setOpenLogin} />
      )}
      {openSignup && (
        <ModalSignup openSignup={openSignup} onOpenSignup={setOpenSignup} />
      )}
    </div>
  );
}
