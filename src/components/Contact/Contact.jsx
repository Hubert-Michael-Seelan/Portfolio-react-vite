// src/components/Contact/Contact.jsx
import React, { useRef, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  TextField,
  Button,
  Typography,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";
import contactImg from "../../assets/images/Contactus.gif";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => setStatus({ success: true, message: "Message sent!" }),
        () => setStatus({ success: false, message: "Failed to send." })
      );
    e.target.reset();
  };

  return (
    <Box id="contact" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            height: { xs: "auto", md: 450 },
          }}
        >
          {/* Left: Illustration */}
          <Box sx={{ display: "flex" }}>
            <CardMedia
              component="img"
              image={contactImg}
              alt="Contact Illustration"
              sx={{
                width: { xs: "100%", md: "100%" },
                height: { xs: 250, md: "100%" },
                objectFit: "cover",
              }}
            />
          </Box>

          {/* Right: Form */}
          <CardContent
            sx={{
              flex: 1,
              p: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    name="user_name"
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                  <TextField
                    name="user_email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    type="email"
                  />
                  <TextField
                    name="message"
                    label="Message"
                    variant="outlined"
                    fullWidth
                    required
                    multiline
                    rows={4}
                  />
                </Box>
              <Box
                sx={{ display: "flex", justifyContent: "flex-start", mt: 3 }}
              >
                <Button variant="contained" color="primary" type="submit">
                  Send Message
                </Button>
              </Box>
            </form>
            {status && (
              <Alert
                severity={status.success ? "success" : "error"}
                sx={{ mt: 2 }}
              >
                {status.message}
              </Alert>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}
