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
import nodejs from "../../assets/icons/Node.js_logo.svg.png";
import msexcel from "../../assets/icons/msexcel.jpg";
import vsc from "../../assets/icons/VSC.jpg";
import redis from "../../assets/icons/redis.png";

const iconMap = {
  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  JavaScript: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  Pandas: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
  NumPy:
    "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg",
  Seaborn: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg",
  Matplotlib:
    "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
  ReactJS: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  "Node.js": nodejs,
  ExpressJS:
    "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  HTML5: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
  CSS3: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
  SCSS: "https://cdn.worldvectorlogo.com/logos/sass-1.svg",
  MUI: "https://mui.com/static/logo.png",
  Bootstrap:
    "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
  Tailwind:
    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  MongoDB:
    "https://w7.pngwing.com/pngs/429/921/png-transparent-mongodb-plain-wordmark-logo-icon.png",
  "MS SQL": mssql,
  MySQL: "https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg",
  Git: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  GitHub:
    "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  Postman: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  Netlify: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
  // Render: "https://render.com/images/logo-dark.svg",
  Excel: msexcel,
  PowerBI:
    "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
  Tableau: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg",
  Figma: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
  // Canva: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Canva_Logo.svg",
  "VS Code": vsc,
  Colab:
    "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
  "Jupyter Notebook":
    "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
};

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { label: "Python", pct: 85 },
      { label: "JavaScript", pct: 80 },
    ],
  },
  {
    category: "Libraries & Frameworks",
    skills: [
      { label: "Pandas", pct: 75 },
      { label: "NumPy", pct: 70 },
      { label: "Seaborn", pct: 60 },
      { label: "Matplotlib", pct: 65 },
      { label: "ReactJS", pct: 80 },
      { label: "Node.js", pct: 70 },
      { label: "ExpressJS", pct: 65 },
    ],
  },
  {
    category: "Databases",
    skills: [
      { label: "MongoDB", pct: 70 },
      { label: "MS SQL", pct: 60 },
      { label: "MySQL", pct: 65 },
    ],
  },
  {
    category: "Markup & Styling",
    skills: [
      { label: "HTML5", pct: 90 },
      { label: "CSS3", pct: 85 },
      { label: "SCSS", pct: 60 },
      { label: "MUI", pct: 75 },
      { label: "Bootstrap", pct: 80 },
      { label: "Tailwind", pct: 70 },
    ],
  },
  {
    category: "Data Analytics & Visualization Tools",
    skills: [
      { label: "Excel", pct: 85 },
      { label: "PowerBI", pct: 80 },
      { label: "Tableau", pct: 70 },
      { label: "Figma", pct: 65 },
      // { label: "Canva", pct: 75 },
    ],
  },
  {
    category: "Web Tools & IDEs",
    skills: [
      { label: "Git", pct: 85 },
      { label: "GitHub", pct: 80 },
      { label: "Postman", pct: 75 },
      { label: "Netlify", pct: 70 },
      // { label: "Render", pct: 65 },
      { label: "VS Code", pct: 90 },
      { label: "Colab", pct: 75 },
      { label: "Jupyter Notebook", pct: 80 },
    ],
  },
];

// Dynamic progress color
const meterColor = (pct) => {
  if (pct > 75) return "#4caf50";
  if (pct > 50) return "#ffeb3b";
  if (pct > 25) return "#ff9800";
  return "#f44336";
};

export default function Skills() {
  const theme = useTheme();

  return (
    <Box id="skills" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Technical & Analytical Skills
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {skillCategories.map((section, idx) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            style={{
              flex: "1 1 380px", // Each card takes equal width space
              maxWidth: "400px",
              minWidth: "340px",
              display: "flex",
            }}
          >
            <Card
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderRadius: 3,
                boxShadow: theme.shadows[6],
                background:
                  theme.palette.mode === "dark"
                    ? "linear-gradient(145deg, #1e1e2f, #232338)"
                    : idx % 2 === 0
                    ? "linear-gradient(145deg, #e3f2fd, #ffffff)"
                    : "linear-gradient(145deg, #fff3e0, #ffffff)",
                height: "100%",
                minHeight: "430px",
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  {section.category}
                </Typography>

                {section.skills.map(({ label, pct }, i) => (
                  <Box key={label} sx={{ mb: 1.5 }}>
                    <Box
                      sx={{ display: "flex", alignItems: "center", mb: 0.5 }}
                    >
                      <Box
                        component="img"
                        src={iconMap[label]}
                        alt={label}
                        sx={{ width: 22, height: 22, mr: 1 }}
                      />
                      <Typography variant="subtitle2">{label}</Typography>
                    </Box>

                    <Box
                      sx={{
                        position: "relative",
                        height: 8,
                        borderRadius: 5,
                        backgroundColor: theme.palette.grey[300],
                        overflow: "hidden",
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 + i * 0.05 }}
                        style={{
                          height: "100%",
                          backgroundColor: meterColor(pct),
                        }}
                      />
                    </Box>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}
