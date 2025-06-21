// src/components/Experience/Experience.jsx
import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Kodukku Classified Pvt Ltd, Chennai",
    period: "June 2024 – Present",
    website: "https://kodukku.com/",
    bullets: [
      "🎬 Built a dedicated 'Talent Show' microservice (Node.js) alongside the main classifieds backend to handle video posts and user interactions independently.",
      "📦 Created a separate compression pod using FFmpeg inside Docker; employed Redis + BullMQ to queue and manage asynchronous video-compression jobs.",
      "🔧 Developed secure Express middleware for uploading videos/images, storing media assets on a dedicated server, and serving them via CDN URLs.",
      "🚀 Architected multiple backends (authentication, media, classifieds) as Docker containers to isolate responsibilities and optimize scalability.",
      "🔄 Leveraged Redis caching and BullMQ queues to offload heavy tasks, ensuring high throughput and reliable background processing.",
    ],
  },
  {
    role: "Frontend Developer (Intern)",
    company: "ParkQwik, Chennai",
    period: "Jan 2024 – Apr 2024",
    bullets: [
      "📱 Developed 2 React Native components for the ParkQwik mobile app.",
      "🎨 Designed 30+ promotional Canvas banners to boost user engagement.",
      "🐞 Fixed over 5 critical bugs, delivering a 95% bug-free experience.",
    ],
  },
  {
    role: "US IT Recruiter",
    company: "Lorven Technologies Inc, Chennai",
    period: "Mar 2022 – May 2023",
    bullets: [
      "🔍 Sourced 40+ qualified US candidates per month via Ceipal ATS and LinkedIn.",
      "🚀 Managed end-to-end recruitment, reducing average time-to-fill by 90%.",
    ],
  },
];

const Experience = () => (
  <Box id="experience" sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>
      Experience
    </Typography>

    <Box sx={{ display: "grid", gap: 3 }}>
      {experienceData.map((exp, idx) => (
        <Card key={idx} sx={{ boxShadow: 3, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h6" component="h3">
              {exp.role}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
            >
              {exp.company} • {exp.period}
              {exp.website && (
                <Button
                  size="small"
                  variant="text"
                  href={exp.website}
                  target="_blank"
                  sx={{ textTransform: "none", fontSize: "0.8rem" }}
                >
                  Visit Site
                </Button>
              )}
            </Typography>
            <List disablePadding>
              {exp.bullets.map((bullet, i) => (
                <ListItem
                  key={i}
                  disableGutters
                  sx={{ alignItems: "flex-start" }}
                >
                  <ListItemIcon sx={{ minWidth: 32, color: "primary.main" }}>
                    <CheckCircleIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary={bullet} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      ))}
    </Box>
  </Box>
);

export default Experience;
