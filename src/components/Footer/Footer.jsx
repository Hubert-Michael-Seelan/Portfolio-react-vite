// src/components/Footer/Footer.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ py: 2, backgroundColor: 'primary.main', color: 'white', textAlign: 'center' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
