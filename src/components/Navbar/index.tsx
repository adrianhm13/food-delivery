import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ModalLogin from "../ModalLogin";
import ModalSignup from "../ModalSignup";

const pages = ["Home", "Menu"];
const settings = ["Account", "Orders", "Logout"];

type NavMenuPagesPhoneProps = {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElNav: HTMLElement | null;
  handleCloseNavMenu: (page: string) => void;
};

type SettingsUserMenuProps = {
  anchorElUser: HTMLElement | null;
  handleCloseNavMenu: (page: string) => void;
  handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseUserMenu: () => void;
};

type NavMenuPagesProps = {
  handleCloseNavMenu: (page: string) => void;
};

export default function Navbar() {
  const [user, setUser] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const history = useHistory();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: string) => {
    history.push(`/${page.toLowerCase()}`);
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="fixed" sx={{ boxShadow: 0, zIndex: 1210 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoMdDevice />
          <NavMenuPagesPhone
            anchorElNav={anchorElNav}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
          />
          <LogoSmDevice />
          <NavMenuPages handleCloseNavMenu={handleCloseNavMenu} />
          {user && (
            <SettingsUserMenu
              anchorElUser={anchorElUser}
              handleCloseNavMenu={handleCloseNavMenu}
              handleOpenUserMenu={handleOpenUserMenu}
              handleCloseUserMenu={handleCloseUserMenu}
            />
          )}
          {!user && <SignInMenu />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

function NavMenuPagesPhone({
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu,
}: NavMenuPagesPhoneProps) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

function SettingsUserMenu(props: SettingsUserMenuProps) {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={props.handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={props.anchorElUser}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={Boolean(props.anchorElUser)}
        onClose={props.handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <MenuItem
            key={setting}
            onClick={() => props.handleCloseNavMenu(setting)}
          >
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

function NavMenuPages({ handleCloseNavMenu }: NavMenuPagesProps) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "flex-end",
        marginRight: { md: "3rem" },
      }}
    >
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => handleCloseNavMenu(page)}
          sx={{ my: 2, color: "text.primary", display: "block" }}
        >
          {page}
        </Button>
      ))}
    </Box>
  );
}

function LogoSmDevice() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
    >
      LOGO
    </Typography>
  );
}

function LogoMdDevice() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="div"
      sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
    >
      LOGO
    </Typography>
  );
}

function SignInMenu() {
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
        variant="contained"
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
      {openLogin && <ModalLogin openLogin={openLogin} onOpenLogin={setOpenLogin}/>}
      {openSignup && <ModalSignup openSignup={openSignup} onOpenSignup={setOpenSignup}/>}
    </div>
  );
}
