import React, { useState } from "react";
import { useLogout } from "../../../hooks/useLogout";

import {
  Box,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  Typography,
  IconButton,
} from "@mui/material";

export type SettingsUserMenuProps = {
  user: {
    displayName?: string;
  };
};

export default function SettingsUserMenu(props: SettingsUserMenuProps) {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const { logout } = useLogout();

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget); //Ref for menu's position
  };

  return (
    <Box>
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
        onClose={() => setAnchorElUser(null)}
      >
        <MenuItem onClick={() => setAnchorElUser(null)}>
          <Typography textAlign="center">Account</Typography>
        </MenuItem>
        <MenuItem onClick={() => setAnchorElUser(null)}>
          <Typography textAlign="center">Orders</Typography>
        </MenuItem>
        <MenuItem onClick={logout}>
          <Typography textAlign="center">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}
