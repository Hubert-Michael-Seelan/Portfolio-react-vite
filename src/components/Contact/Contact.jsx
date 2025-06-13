// src/components/Contact/Contact.jsx
import React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Me
      </Typography>
      <form noValidate autoComplete="off">
        <TextField label="Name" variant="outlined" fullWidth margin="normal" required />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" required type="email" />
        <TextField label="Message" variant="outlined" fullWidth margin="normal" multiline rows={4} required />
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
