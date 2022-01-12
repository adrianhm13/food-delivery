import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";

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
import { useAuthContext } from "../../hooks/useAuthContext";

const pages = ["Home", "Menu"];

type NavMenuPagesPhoneProps = {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElNav: HTMLElement | null;
  handleCloseNavMenu: (page: string) => void;
};

type SettingsUserMenuProps = {
  user: {
    displayName?: string;
  };
};

type NavMenuPagesProps = {
  handleCloseNavMenu: (page: string) => void;
};

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const { user } = useAuthContext();
  const history = useHistory();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: string) => {
    if (page === "Home") {
      history.push("/");
    } else {
      history.push(`/${page.toLowerCase()}`);
    }
    setAnchorElNav(null);
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
          {user && <SettingsUserMenu user={user} />}
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
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const { logout } = useLogout();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
    console.log(event.currentTarget)
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title={`Check your profile ${props.user.displayName}`}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={props.user.displayName}
            src="/static/images/avatar/2.jpg"
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Account</Typography>
        </MenuItem>
        <MenuItem onClick={handleCloseUserMenu}>
          <Typography textAlign="center">Orders</Typography>
        </MenuItem>
        <MenuItem onClick={logout}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
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
      {openLogin && (
        <ModalLogin openLogin={openLogin} onOpenLogin={setOpenLogin} />
      )}
      {openSignup && (
        <ModalSignup openSignup={openSignup} onOpenSignup={setOpenSignup} />
      )}
    </div>
  );
}
