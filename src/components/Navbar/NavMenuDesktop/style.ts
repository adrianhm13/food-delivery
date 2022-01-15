export const Nav = {
    flexGrow: 1,
    display: { xs: "none", md: "flex" },
    justifyContent: "flex-end",
    marginRight: { md: 2 },
  }

  export const NavLink = {
    my: 2,
    color: "text.primary",
    display: "block",
    "&.active": {
      backgroundColor: "secondary.main",
      color: "common.white",
    },
  }