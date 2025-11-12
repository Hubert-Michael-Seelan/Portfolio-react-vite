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
    transition: { delay: i * 0.25, ease: "easeOut" },
  }),
};

const stats = [
  { label: "Projects", value: 4 },
  { label: "Dashboards", value: 3 },
];

const Home = () => {
  const githubUrl = "https://github.com/Hubert-Michael-Seelan";
  const linkedInUrl =
    "https://www.linkedin.com/in/hubert-michael-seelan-a-6624a8235/";
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
      {/* SVG Blob behind the image */}
      <Box
        component="svg"
        viewBox="0 0 200 200"
        sx={{
          position: "absolute",
          top: "-20%",
          left: "-10%",
          width: "60vw",
          height: "60vw",
          opacity: 0.12,
          fill: theme.palette.mode === "dark" ? "#1e1e2f" : "#ffffff",
        }}
      >
        <path
          d="M41.6,-55.5C53.8,-45.3,64.1,-33.5,69,-19.8C73.8,-6.1,73.1,9.6,66.2,22.9C59.3,36.2,46.0,47.1,31.1,54.7C16.2,62.3,-0.3,66.6,-16.7,64.3C-33.2,62.0,-49.7,53.0,-60.4,39.8C-71.0,26.6,-75.9,9.3,-71.4,-6.0C-66.8,-21.2,-52.8,-34.3,-37.3,-44.8C-21.9,-55.2,-10.9,-63.0,2.0,-66.1C14.9,-69.2,29.8,-67.4,41.6,-55.5Z"
          transform="translate(100 100)"
        />
      </Box>

      <Grid container spacing={4} alignItems="center">
        {/* Left: profile card */}
        <Grid item xs={12} sm={6}>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
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

        {/* Right: content */}
        <Grid item xs={12} sm={6}>
          <Stack spacing={2}>
            {/* Responsive headline: stacked on mobile, inline on larger */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.4}
              variants={textVariant}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: { xs: "center", sm: "baseline" },
                  gap: 1,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  Hello, I’m
                </Typography>

                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    fontWeight: "700",
                    lineHeight: 1,
                    mt: { xs: 0.5, sm: 0 },
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Box component="span">Hubert</Box>
                  <Box
                    component="span"
                    aria-hidden
                    sx={{ fontSize: { xs: "1.4rem", sm: "1.8rem" } }}
                  >
                    👋
                  </Box>
                </Typography>
              </Box>
            </motion.div>

            {/* Short headline tuned for fresher -> data analytics */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.9}
              variants={textVariant}
            >
              <Typography
                variant="h6"
                sx={{
                  fontStyle: "normal",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                Aspiring Data Analyst • Full-Stack Background
              </Typography>
            </motion.div>

            {/* Short value statement + bullets */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1.2}
              variants={textVariant}
            >
              <Typography
                variant="body1"
                sx={{ color: "rgba(255,255,255,0.92)" }}
              >
                I focus on cleaning datasets, exploring patterns, and building
                clear dashboards that help teams make decisions.
              </Typography>

              <Box
                component="ul"
                sx={{
                  pl: 3,
                  mt: 1,
                  textAlign: { xs: "center", sm: "left" },
                  "& li": { marginBottom: 0.5 },
                }}
              >
                <li>📊 Interactive dashboards to reveal business insights</li>
                <li>
                  🧹 Data wrangling with SQL & pandas for reliable analysis
                </li>
                <li>
                  📈 Simple time-based analysis and segmentation experiments
                </li>
              </Box>
            </motion.div>

            {/* KPI chips */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={1.6}
              variants={textVariant}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 1,
                  flexWrap: "wrap",
                  justifyContent: { xs: "center", sm: "flex-start" },
                }}
              >
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
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(0,0,0,0.06)",
                      color: "inherit",
                      fontWeight: 600,
                    }}
                  />
                ))}
              </Box>
            </motion.div>

            {/* Socials + CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={2}
              variants={textVariant}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  flexWrap: "wrap",
                }}
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

                <Box sx={{ display: "flex", gap: 1 }}>
                  <Button
                    variant="contained"
                    size="medium"
                    onClick={() => window.open(resume, "_blank")}
                  >
                    Download CV
                  </Button>
                  <Button
                    variant="outlined"
                    size="medium"
                    onClick={() => window.open(certificatesUrl, "_blank")}
                    sx={{ borderColor: "white", color: "white" }}
                  >
                    Certificates
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
