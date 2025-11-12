// src/components/Header/Header.jsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = ({ darkMode, toggleDarkMode }) => {
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  // helper to close menu and optionally navigate
  const handleNavClick = (href) => {
    handleMenuClose();
    // small delay so menu closes nicely before jump
    setTimeout(() => {
      window.location.href = href;
    }, 50);
  };

  return (
    <AppBar position="sticky" color="primary" elevation={4}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Typography
            variant="h6"
            component="a"
            href="#home"
            sx={{
              color: "inherit",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Hubert.Analyst
          </Typography>
        </Box>

        {/* Desktop / tablet: show inline buttons */}
        {isSmUp ? (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                href={item.href}
                sx={{ textTransform: "none" }}
              >
                {item.label}
              </Button>
            ))}

            <IconButton
              onClick={toggleDarkMode}
              color="inherit"
              aria-label="toggle theme"
              sx={{ ml: 1 }}
            >
              {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        ) : (
          /* Mobile: hamburger menu */
          <Box>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="open menu"
              onClick={handleMenuOpen}
              aria-controls={open ? "header-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="header-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
            >
              {navItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </MenuItem>
              ))}

              <Divider />

              <MenuItem
                onClick={() => {
                  toggleDarkMode();
                  handleMenuClose();
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  {darkMode ? (
                    <Brightness7Icon fontSize="small" />
                  ) : (
                    <Brightness4Icon fontSize="small" />
                  )}
                  <Typography variant="body2">
                    {darkMode ? "Light mode" : "Dark mode"}
                  </Typography>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
