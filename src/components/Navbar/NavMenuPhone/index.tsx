import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

import {Box, IconButton, Menu, Button, MenuItem} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import * as Styled from './style'

export type NavMenuPagesPhoneProps = {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  onAnchorElNav: (value: React.SetStateAction<HTMLElement | null>) => void;
  anchorElNav: HTMLElement | null;
};

export default function NavMenuPhone({
  handleOpenNavMenu, anchorElNav, onAnchorElNav,
}: NavMenuPagesPhoneProps) {
  return (
    <Box sx={Styled.NavMenuPhone}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        open={Boolean(anchorElNav)}
        onClose={() => onAnchorElNav(null)}
        sx={Styled.MenuContent}
      >
        <MenuItem onClick={() => onAnchorElNav(null)}>
          <Button component={RouterLink} exact to="/">
            Home
          </Button>
        </MenuItem>
        <MenuItem onClick={() => onAnchorElNav(null)}>
          <Button component={RouterLink} exact to="/menu">
            Menu
          </Button>
        </MenuItem>
      </Menu>
    </Box>
  );
}
