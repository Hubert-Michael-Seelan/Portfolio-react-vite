// src/App.jsx
import React, { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SlideInSection from "./common/SlideInSection";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { lightTheme, darkTheme } from "./theme";
import Academic from "./components/Academic/Academic";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header
        darkMode={darkMode}
        toggleDarkMode={() => setDarkMode((d) => !d)}
      />
      <Box sx={{ p: 2 }}>
        {/* Hero section */}
        <Home />
        <SlideInSection direction="right">
          <Experience />
        </SlideInSection>

        <SlideInSection direction="left">
          <Academic />
        </SlideInSection>

        <SlideInSection direction="left">
          <Skills />
        </SlideInSection>

        <SlideInSection direction="right">
          <Projects />
        </SlideInSection>

        <SlideInSection direction="left">
          <Contact />
        </SlideInSection>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
