// src/components/Projects/Projects.jsx
import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MusicDemo from "../../assets/images/music_demo.png";
import ContraDemo from "../../assets/images/ecommerce_img.png";

const projectData = [
  {
    title: "Online Music Player",
    image: MusicDemo,
    gradient: "linear-gradient(135deg, #009688 0%, #CDDC39 100%)",
    bullets: [
      "🎵 Built a MERN‑based music player integrating Redux for state management.",
      "🔐 Implemented secure user authentication and data storage with MongoDB Atlas.",
      "🛠️ Utilized Postman for robust backend validation.",
      "🎨 Styled with Tailwind CSS for a visually appealing UI.",
    ],
    liveLink: "https://applemusicapp.netlify.app/",
  },
  {
    title: "Contra (E‑commerce Platform)",
    image: ContraDemo,
    gradient: "linear-gradient(135deg, #FF5722 0%, #F44336 100%)",
    bullets: [
      "👕 Developed a clothing e‑commerce platform using the MERN stack.",
      "🔄 Integrated Redux for streamlined inventory and cart management.",
      "⚙️ Connected to RESTful product APIs and validated endpoints via Postman.",
      "🛍️ Ensured seamless front‑to‑back‑end interaction.",
    ],
    liveLink: "https://contra-ecommerce.netlify.app/",
  },
];

const Projects = () => {
  const theme = useTheme();

  return (
    <Box id="projects" sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        {projectData.map((proj, idx) => (
          <Grid item xs={12} sm={6} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  background: proj.gradient,
                  color: "#fff",
                  boxShadow: theme.shadows[8],
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  image={proj.image}
                  alt={`${proj.title} demo`}
                  sx={{ height: 200, objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1, pt: 2 }}>
                  <Typography variant="h5" gutterBottom>
                    {proj.title}
                  </Typography>
                  <List disablePadding>
                    {proj.bullets.map((text, i) => (
                      <ListItem
                        key={i}
                        disableGutters
                        sx={{ alignItems: "flex-start" }}
                      >
                        <ListItemIcon sx={{ minWidth: 32, color: "#fff" }}>
                          {/* <CheckCircleIcon fontSize="small" /> */}
                        </ListItemIcon>
                        <ListItemText
                          primary={text}
                          primaryTypographyProps={{ sx: { color: "#fff" } }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                  <Button
                    size="medium"
                    variant="contained"
                    sx={{
                      backgroundColor: "#fff",
                      color: theme.palette.getContrastText("#fff"),
                    }}
                    onClick={() => window.open(proj.liveLink, "_blank")}
                  >
                    Go Live
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
