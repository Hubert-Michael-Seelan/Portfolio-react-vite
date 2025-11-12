// src/components/Projects/Projects.jsx
import React, { useEffect, useState, useCallback } from "react";
import {
  Box,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  useTheme,
  Tooltip,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GitHubIcon from "@mui/icons-material/GitHub";

// Demo images
import MusicDemo from "../../assets/images/music_demo.png";
import ContraDemo from "../../assets/images/ecommerce_img.png";
import RetailDemo from "../../assets/images/retail_demo.png";
import PowerBIDemo from "../../assets/images/powerbi_demo.png";

const projectData = [
  {
    id: "retail",
    title: "Retail Sales Data Analysis",
    image: RetailDemo,
    gradient: "linear-gradient(135deg, #3F51B5 0%, #2196F3 100%)",
    bullets: [
      "Performed data cleaning & analysis using Python and Pandas.",
      "Processed 3,000+ records to extract sales & profit insights.",
      "Generated trend reports & visual summaries for business impact.",
    ],
    liveLink: "https://github.com/your-repo/retail-sales-analysis",
  },
  {
    id: "powerbi",
    title: "Sales Performance (Power BI)",
    image: PowerBIDemo,
    gradient: "linear-gradient(135deg, #8E24AA 0%, #5C6BC0 100%)",
    bullets: [
      "Designed interactive Power BI dashboard for sales & profit KPIs.",
      "Used DAX for Profit Margin %, Total Sales & Target Comparison.",
      "Delivered actionable regional performance insights.",
    ],
    liveLink:
      "https://github.com/Hubert-Michael-Seelan/Case_Study_with_Power-BI",
  },
  {
    id: "music",
    title: "Online Music Player",
    image: MusicDemo,
    gradient: "linear-gradient(135deg, #00BCD4 0%, #4CAF50 100%)",
    bullets: [
      "Built MERN-based music app with Redux & Tailwind CSS.",
      "Secure auth, MongoDB Atlas & RESTful API integration.",
      "FFmpeg media optimization for smooth playback.",
    ],
    liveLink: "https://applemusicapp.netlify.app/",
  },
  {
    id: "contra",
    title: "Contra (E-commerce)",
    image: ContraDemo,
    gradient: "linear-gradient(135deg, #F57C00 0%, #E91E63 100%)",
    bullets: [
      "Full MERN stack e-commerce site with Redux & Node.js.",
      "Integrated product APIs with dynamic cart & checkout.",
      "Modern UI with responsive, fluid Tailwind layout.",
    ],
    liveLink: "https://contra-ecommerce.netlify.app/",
  },
];

export default function Projects() {
  const theme = useTheme();
  const [active, setActive] = useState(0);
  const n = projectData.length;

  const next = useCallback(() => setActive((s) => (s + 1) % n), [n]);
  const prev = useCallback(() => setActive((s) => (s - 1 + n) % n), [n]);

  // keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const radius = 260; // spread horizontally
  const radiusY = 60; // subtle vertical offset
  const step = (Math.PI * 2) / n;

  return (
    <Box id="projects" sx={{ py: 6, position: "relative" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        My Projects
      </Typography>

      <Box
        sx={{
          mt: 3,
          height: { xs: 500, sm: 600 },
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Navigation arrows */}
        <IconButton
          onClick={prev}
          sx={{
            position: "absolute",
            left: 12,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 40,
            bgcolor: "background.paper",
            boxShadow: 3,
            "&:hover": { bgcolor: "primary.main", color: "#fff" },
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <IconButton
          onClick={next}
          sx={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 40,
            bgcolor: "background.paper",
            boxShadow: 3,
            "&:hover": { bgcolor: "primary.main", color: "#fff" },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>

        {/* Circle container */}
        <Box
          sx={{
            width: { xs: "100%", sm: 1000 },
            height: { xs: 460, sm: 540 },
            position: "relative",
            overflow: "visible",
          }}
        >
          {projectData.map((proj, idx) => {
            const relative = idx - active;
            let offset = relative;
            if (offset > n / 2) offset -= n;
            if (offset < -n / 2) offset += n;

            const angle = offset * step;
            const x = Math.sin(angle) * radius;
            const y = Math.cos(angle) * radiusY;
            const depth = Math.cos(angle);
            const scale = idx === active ? 1.05 : 0.85 + 0.15 * depth;
            const zIndex = Math.round(100 + 50 * depth);
            const isActive = idx === active;

            return (
              <Box
                key={proj.id}
                sx={{
                  position: "absolute",
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  transition:
                    "all 600ms cubic-bezier(.2,.9,.2,1), box-shadow 400ms",
                  zIndex,
                  pointerEvents: isActive ? "auto" : "none",
                  width: { xs: 320, sm: 400 },
                  height: { xs: 420, sm: 480 },
                }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 4,
                    overflow: "hidden",
                    background: proj.gradient,
                    color: "#fff",
                    boxShadow: isActive
                      ? "0px 12px 28px rgba(0,0,0,0.4)"
                      : "0px 4px 12px rgba(0,0,0,0.2)",
                    transition: "box-shadow 0.5s, transform 0.5s",
                    border: isActive
                      ? `2px solid ${theme.palette.primary.light}`
                      : "none",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={proj.image}
                    alt={proj.title}
                    sx={{
                      height: { xs: 180, sm: 220 },
                      objectFit: "cover",
                      filter: isActive ? "brightness(1)" : "brightness(0.8)",
                      transition: "filter 0.4s",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 700,
                        mb: 1,
                        textShadow: "0 1px 3px rgba(0,0,0,0.4)",
                      }}
                    >
                      {proj.title}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, m: 0 }}>
                      {proj.bullets.map((b, i) => (
                        <li key={i}>
                          <Typography variant="body2">{b}</Typography>
                        </li>
                      ))}
                    </Box>
                  </CardContent>

                  <CardActions
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      px: 2,
                      pb: 2,
                    }}
                  >
                    <Button
                      size="small"
                      variant="contained"
                      sx={{
                        bgcolor: "#fff",
                        color: theme.palette.primary.main,
                        "&:hover": {
                          bgcolor: theme.palette.primary.light,
                          color: "#fff",
                        },
                      }}
                      onClick={() => window.open(proj.liveLink, "_blank")}
                    >
                      {proj.title.includes("Dashboard") ||
                      proj.title.includes("Analysis")
                        ? "View Repo"
                        : "View Live"}
                    </Button>

                    <Tooltip title="GitHub Repository">
                      <IconButton
                        onClick={() => window.open(proj.liveLink, "_blank")}
                        sx={{
                          color: "#fff",
                          "&:hover": { color: theme.palette.primary.light },
                        }}
                      >
                        <GitHubIcon fontSize="medium" />
                      </IconButton>
                    </Tooltip>
                  </CardActions>
                </Card>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Dot indicators */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "center",
          mt: 6,
        }}
      >
        {projectData.map((_, i) => (
          <Box
            key={i}
            onClick={() => setActive(i)}
            sx={{
              width: i === active ? 14 : 10,
              height: i === active ? 14 : 10,
              borderRadius: "50%",
              bgcolor: i === active ? "primary.main" : "grey.500",
              cursor: "pointer",
              transition: "all 250ms ease",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
