// src/components/Certifications/Certifications.jsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const certs = [
  {
    title: 'Full Stack WEB Development (MERN Stack)',
    issuer: 'GUVI IITM',
    period: 'May 2023 – Nov 2023'
  }
];

const Certifications = () => (
  <Box id="certifications" sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>
      Certifications
    </Typography>
    <List>
      {certs.map((c, i) => (
        <ListItem key={i} sx={{ pl: 0 }}>
          <ListItemText
            primary={c.title}
            secondary={`${c.issuer} • ${c.period}`}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Certifications;
