// src/components/Skills/Skills.jsx
import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import mssql from "../../assets/icons/sql-server-icon.svg";

// Mapping skill labels to icon URLs
const iconMap = {
  HTML5: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
  CSS3: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
  JavaScript:
    "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
  ReactJS:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png",
  "React Native":
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  NodeJS:
    "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
  MongoDB:
    "https://w7.pngwing.com/pngs/429/921/png-transparent-mongodb-plain-wordmark-logo-icon.png",
  "MS SQL": mssql,
  Firebase:
    "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
  Redis: "https://redis.io/images/redis-white-text-logo.svg",
  Git: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  GitHub:
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  VSC: "https://code.visualstudio.com/assets/images/code-stable.png",
  Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  Netlify: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
  Render: "https://render.com/images/logo-dark.svg",
};

const skillList = [
  { label: "HTML5", pct: 90 },
  { label: "CSS3", pct: 85 },
  { label: "JavaScript", pct: 80 },
  { label: "ReactJS", pct: 75 },
  { label: "React Native", pct: 40 },
  { label: "NodeJS", pct: 65 },
  { label: "MongoDB", pct: 50 },
  { label: "MS SQL", pct: 55 },
  { label: "Firebase", pct: 40 },
  { label: "Redis", pct: 45 },
  { label: "Git", pct: 85 },
  { label: "GitHub", pct: 80 },
  { label: "VSC", pct: 75 },
  { label: "Postman", pct: 70 },
  { label: "Netlify", pct: 65 },
  { label: "Render", pct: 60 },
];

// Determine meter color based on percentage
const meterColor = (pct) => {
  if (pct > 75) return "#4caf50"; // green
  if (pct > 50) return "#ffeb3b"; // yellow
  if (pct > 25) return "#ff9800"; // orange
  return "#f44336"; // red
};
export default function Skills() {
  const theme = useTheme();

  return (
    <Box id="skills" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Technical Skills
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        {skillList.map(({ label, pct }, i) => (
          <Grid item xs={12} sm={6} md={4} key={label}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  background:
                    theme.palette.mode === "dark"
                      ? theme.palette.grey[900]
                      : theme.palette.grey[100],
                  boxShadow: theme.shadows[4],
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  {/* Icon + Label */}
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                    <Box
                      component="img"
                      src={iconMap[label]}
                      alt={label}
                      sx={{ width: 28, height: 28, mr: 1 }}
                    />
                    <Typography variant="subtitle1" fontWeight="bold">
                      {label}
                    </Typography>
                  </Box>

                  {/* Meter */}
                  <Box
                    sx={{
                      position: "relative",
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: theme.palette.grey[300],
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${pct}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1 + i * 0.05, ease: "easeOut" }}
                      style={{
                        height: "100%",
                        backgroundColor: meterColor(pct),
                      }}
                    />
                    <Typography
                      variant="caption"
                      sx={{
                        position: "absolute",
                        right: 8,
                        top: -18,
                      }}
                    >
                      {pct}%
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
