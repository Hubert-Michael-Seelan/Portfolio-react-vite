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
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Full Stack Developer",
    company: "Kodukku Classified Pvt Ltd, Chennai",
    period: "July 2024 – July 2025",
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
    role: "Software Developer",
    company: "Evolve Automotive, Chennai",
    period: "May 2023 – July 2024",
    bullets: [
      "📱 Contributed to frontend development using React.js by building reusable UI components.",
      "🎨 Supported backend development tasks using Node.js and Express.js.",
      "🐞 Participated in debugging, testing, and resolving application issues.",
    ],
  },
  {
    role: "Junior Developer",
    company: "Lorven Technologies Inc, Chennai",
    period: "Mar 2022 – May 2023",
    bullets: [
      "🔍 Developed reusable frontend components using React.js, improving UI consistency.",
      "🚀 Assisted in backend API integration and data flow handling.",
    ],
  },
];

const Experience = () => {
  const theme = useTheme();

  return (
    <Box id="experience" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Experience
      </Typography>

      <Box sx={{ display: "grid", gap: 3 }}>
        {experienceData.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: theme.shadows[6],
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, #1e1e2f, #232338)"
                    : idx % 2 === 0
                    ? "linear-gradient(145deg, #e3f2fd, #ffffff)"
                    : "linear-gradient(145deg, #fff3e0, #ffffff)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{ fontWeight: "bold", mb: 0.5 }}
                >
                  {exp.role}
                </Typography>

                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{
                    mb: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    flexWrap: "wrap",
                  }}
                >
                  {exp.company} • {exp.period}
                  {exp.website && (
                    <Button
                      size="small"
                      variant="text"
                      href={exp.website}
                      target="_blank"
                      sx={{
                        textTransform: "none",
                        fontSize: "0.8rem",
                        color: theme.palette.primary.main,
                      }}
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
                      sx={{ alignItems: "flex-start", mb: 0.5 }}
                    >
                      <ListItemIcon
                        sx={{ minWidth: 32, color: "primary.main" }}
                      >
                        {/* <CheckCircleIcon fontSize="small" /> */}
                      </ListItemIcon>
                      <ListItemText primary={bullet} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default Experience;
