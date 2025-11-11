// src/components/Home/Home.jsx
import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  IconButton,
  Card,
  CardMedia,
  Stack,
  Container,
  useTheme,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ProfileImg from "../../assets/images/hms_profile.jpg";
import resume from "../../assets/pdf/Hubert Michael Seelan.pdf";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, ease: "easeOut" },
  }),
};

const stats = [
  { label: "Projects", value: 4 },
  { label: "Dashboards", value: 3 },
  // { label: "Kaggle Notebooks", value: 2 },
];

const Home = () => {
  const githubUrl = "https://github.com/Hubert-Michael-Seelan";
  const linkedInUrl =
    "https://www.linkedin.com/in/hubert-michael-seelan-a-6624a8235/";
  const kaggleUrl = "https://www.kaggle.com/"; 
  const dashboardsUrl = "/projects"; 
  const certificatesUrl =
    "https://drive.google.com/drive/folders/1LFFaFsZobb9EQJV41CE5wL-wVss7JHwz";
  const theme = useTheme();

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        py: { xs: 4, sm: 6, md: 12 },
        px: { xs: 2, sm: 4, md: 6 },
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(135deg, #121212 0%, #1e1e2f 100%)"
            : "linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
      }}
    >
      {/* SVG Blob behind the image (unchanged) */}
      <Box
        component="svg"
        viewBox="0 0 200 200"
        sx={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          opacity: 0.15,
          fill: theme.palette.mode === "dark" ? "#1e1e2f" : "#ffffff",
        }}
      >
        <path
          d="M41.6,-55.5C53.8,-45.3,64.1,-33.5,69,-19.8C73.8,-6.1,73.1,9.6,66.2,22.9C59.3,36.2,46.0,47.1,31.1,54.7C16.2,62.3,-0.3,66.6,-16.7,64.3C-33.2,62.0,-49.7,53.0,-60.4,39.8C-71.0,26.6,-75.9,9.3,-71.4,-6.0C-66.8,-21.2,-52.8,-34.3,-37.3,-44.8C-21.9,-55.2,-10.9,-63.0,2.0,-66.1C14.9,-69.2,29.8,-67.4,41.6,-55.5Z"
          transform="translate(100 100)"
        />
      </Box>

      <Grid container spacing={4} alignItems="center">
        {/* Left: organic-shaped profile card (unchanged) */}
        <Grid item xs={12} sm={6}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  width: 300,
                  height: 300,
                  borderRadius: "40% 60% 30% 70% / 60% 30% 70% 40%",
                  boxShadow: theme.shadows[12],
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <CardMedia
                  component="img"
                  image={ProfileImg}
                  alt="Hubert Profile"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Card>
            </Box>
          </motion.div>
        </Grid>

        {/* Right: content (updated copy + chips + CTAs) */}
        <Grid item xs={12} sm={6} md={6} sx={{ width: "70%" }}>
          <Stack spacing={2}>
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.5}
              variants={textVariant}
            >
              <Typography
                variant="h3"
                component="h1"
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                Hello, I’m{" "}
                <Box component="span" fontWeight="bold">
                  Hubert
                </Box>
                <Box component="span" sx={{ fontSize: "1.8rem" }}>
                  👋
                </Box>
              </Typography>
            </motion.div>
            {/* Data Analytics headline */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1}
              variants={textVariant}
            >
              <Typography variant="h5" sx={{ fontStyle: "bold" }}>
                Data Analyst & Full-Stack Developer — turning data into
                decisions.
              </Typography>
            </motion.div>

            {/* Short value statement + bullets */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1.5}
              variants={textVariant}
            >
              <Typography variant="body1">
                As a growing Data Analyst, I specialize in cleaning messy
                datasets, analyzing patterns, and building interactive
                dashboards that highlight key business trends.
              </Typography>
              <Box component="ul" sx={{ pl: 3, mt: 1 }}>
                <li>📊 Power BI/Tableau dashboards for leadership decisions</li>
                <li>
                  🧹 Data wrangling in SQL & pandas for clean, reliable data
                </li>
                <li>
                  📈 Time-series & clustering for forecasting & segmentation
                </li>
              </Box>
            </motion.div>

            {/* KPI chips */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textVariant}
            >
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                {stats.map((s) => (
                  <Chip
                    key={s.label}
                    icon={
                      s.label === "Dashboards" ? (
                        <InsertChartIcon />
                      ) : (
                        <AssessmentIcon />
                      )
                    }
                    label={`${s.value} ${s.label}`}
                    sx={{
                      bgcolor:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.08)"
                          : "rgba(0,0,0,0.08)",
                      color: "inherit",
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Box>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={2.3}
              variants={textVariant}
            >
              <Box sx={{ display: "flex", gap: 1 }}>
                <IconButton
                  aria-label="GitHub"
                  onClick={() => window.open(githubUrl, "_blank")}
                  sx={{ color: "white" }}
                >
                  <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton
                  aria-label="LinkedIn"
                  onClick={() => window.open(linkedInUrl, "_blank")}
                  sx={{ color: "white" }}
                >
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Box>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={2.5}
              variants={textVariant}
            >
              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => window.open(resume, "_blank")}
                >
                  Download CV
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => window.open(certificatesUrl, "_blank")}
                  sx={{ borderColor: "white", color: "white" }}
                >
                  Certificates
                </Button>
              </Box>
            </motion.div>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
