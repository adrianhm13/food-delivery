import React, { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

import NavMenuPhone from "./NavMenuPhone";
import SettingsUserMenu from "./SettingsUserMenu";
import NavMenuPages from "./NavMenuDesktop";
import LogoPhone from "./LogoPhone";
import LogoDesktop from "./LogoDesktop";
import SignInMenu from "./SignInMenu";
import { AppBar, Toolbar, Container } from "@mui/material";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const { user } = useAuthContext();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <AppBar position="fixed" sx={{ boxShadow: 0, zIndex: 1210 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoDesktop />
          <NavMenuPhone
            onAnchorElNav={setAnchorElNav}
            anchorElNav={anchorElNav}
            handleOpenNavMenu={handleOpenNavMenu}
          />
          <LogoPhone />
          <NavMenuPages />
          {user && <SettingsUserMenu user={user} />}
          {!user && <SignInMenu />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
