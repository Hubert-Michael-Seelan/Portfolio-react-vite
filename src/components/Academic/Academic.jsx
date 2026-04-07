// src/components/Academic/Academic.jsx
import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

const degrees = [
  {
    degree: "B.Sc. in Mathematics",
    school: "Patrician College of Arts and Science, Chennai",
    period: "Jun 2017 – May 2020",
  },
];

const certs = [
  {
    title: "Data Analytics",
    issuer: "ACTE Technologies",
    period: "Sep 2025 – Nov 2025",
  },
  {
    title: "Full Stack Web Development (MERN Stack)",
    issuer: "GUVI HCL",
    period: "May 2023 – Nov 2023",
  },
  {
    title: "The Python Mega Course: Build 10 Real-World Applications",
    issuer: "Udemy",
    period: "Aug 2021",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Academic = () => {
  const theme = useTheme();

  return (
    <Box id="academic" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Academics & Certifications
      </Typography>

      <Grid container spacing={4} alignItems="stretch">
        {/* Education Card */}
        <Grid item xs={12} sm={6}>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.5}
            variants={cardVariant}
            whileHover={{ scale: 1.02 }}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: 3,
                boxShadow: theme.shadows[5],
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, #1e1e2f, #232338)"
                    : "linear-gradient(145deg, #e3f2fd, #ffffff)",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  🎓 Education
                </Typography>
                <List disablePadding>
                  {degrees.map((item, i) => (
                    <ListItem key={i} disableGutters sx={{ mb: 1 }}>
                      <ListItemText
                        primary={item.degree}
                        secondary={`${item.school} • ${item.period}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>

        {/* Certifications Card */}
        <Grid item xs={12} sm={6}>
          <motion.div
            initial="hidden"
            animate="visible"
            custom={1}
            variants={cardVariant}
            whileHover={{ scale: 1.02 }}
          >
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                borderRadius: 3,
                boxShadow: theme.shadows[5],
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, #1e1e2f, #232338)"
                    : "linear-gradient(145deg, #fff3e0, #ffffff)",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{ fontWeight: "bold" }}
                >
                  🏅 Certifications
                </Typography>
                <List disablePadding>
                  {certs.map((item, i) => (
                    <ListItem key={i} disableGutters sx={{ mb: 1 }}>
                      <ListItemText
                        primary={item.title}
                        secondary={`${item.issuer} • ${item.period}`}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Academic;
