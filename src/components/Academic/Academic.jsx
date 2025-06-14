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
  // {
  //   degree: "M.Sc. in Mathematics",
  //   school: "Patrician College of Arts and Science, Chennai",
  //   period: "Jul 2020 – Mar 2022",
  // },
  {
    degree: "B.Sc. in Mathematics",
    school: "Patrician College of Arts and Science, Chennai",
    period: "Jun 2017 – Mar 2020",
  },
];

const certs = [
  {
    title: "Full Stack WEB Development (MERN Stack)",
    issuer: "GUVI IITM",
    period: "May 2023 – Nov 2023",
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
        {[
          { title: "Education", items: degrees },
          { title: "Certifications", items: certs },
        ].map((section, idx) => (
          <Grid item xs={12} sm={6} key={section.title}>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={idx + 1}
              variants={cardVariant}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  boxShadow: theme.shadows[4],
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    {section.title}
                  </Typography>
                  <List disablePadding>
                    {section.items.map((item, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemText
                          primary={item.degree || item.title}
                          secondary={`${item.school || item.issuer} • ${
                            item.period
                          }`}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Academic;
