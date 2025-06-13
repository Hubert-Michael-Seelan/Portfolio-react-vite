// src/components/Header/Header.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">My Portfolio</Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" href="#about">
            About
          </Button>
          <Button color="inherit" href="#projects">
            Projects
          </Button>
          <Button color="inherit" href="#contact">
            Contact
          </Button>
          <IconButton onClick={toggleDarkMode} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
