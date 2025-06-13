// src/components/Experience/Experience.jsx
import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Kodukku Classified Pvt Ltd, Chennai",
    period: "Jul 2024 – Present",
    bullets: [
      "Built end‑to‑end features with React, Node.js & MUI for a digital classifieds platform.",
      "Optimized MS SQL schemas, stored procs & queries for high‑volume data.",
      "Worked in Agile teams—code reviews, unit tests & bi‑weekly releases.",
    ],
  },
  {
    role: "Frontend Developer (Intern)",
    company: "ParkQwik, Chennai",
    period: "Jan 2024 – Apr 2024",
    bullets: [
      "Built 2 React Native components & designed 30+ Canvas banners.",
      "Fixed 5+ critical bugs, delivering 95% bug‑free UX.",
    ],
  },
  {
    role: "US IT Recruiter",
    company: "Lorven Technologies Inc, Chennai",
    period: "Mar 2022 – May 2023",
    bullets: [
      "Sourced 40+ US candidates/month via Ceipal ATS & LinkedIn.",
      "Managed full recruitment life‑cycle—reduced time‑to‑fill by 90%.",
    ],
  },
];

const Experience = () => (
  <Box id="experience" sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>
      Experience
    </Typography>
    <List>
      {experienceData.map((exp, i) => (
        <Box key={i} sx={{ mb: 3 }}>
          <Typography variant="h6">{exp.role}</Typography>
          <Typography color="text.secondary">
            {exp.company} • {exp.period}
          </Typography>
          <List disablePadding>
            {exp.bullets.map((b, j) => (
              <ListItem key={j} sx={{ pl: 2 }}>
                <ListItemText primary={b} />
              </ListItem>
            ))}
          </List>
          {i < experienceData.length - 1 && <Divider sx={{ mt: 2 }} />}
        </Box>
      ))}
    </List>
  </Box>
);

export default Experience;
