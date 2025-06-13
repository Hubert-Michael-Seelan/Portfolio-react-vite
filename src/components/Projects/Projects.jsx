// src/components/Projects/Projects.jsx
import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

const Projects = () => {
  const projectData = [
    {
      title: 'Project One',
      description: 'A brief description of project one.',
    },
    {
      title: 'Project Two',
      description: 'A brief description of project two.',
    },
    // Add more projects as needed
  ];

  return (
    <Box id="projects" sx={{ py: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        My Projects
      </Typography>
      <Grid container spacing={2}>
        {projectData.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5">{project.title}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
