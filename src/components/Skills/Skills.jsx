// src/components/Skills/Skills.jsx
import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';

const skills = {
  Languages: ['HTML', 'CSS', 'JavaScript'],
  Frameworks: ['ReactJS', 'React Native', 'NodeJS'],
  Databases: ['MongoDB', 'MS SQL', 'Firebase', 'Redis'],
  Tools: ['Git', 'GitHub', 'VSC', 'Postman', 'Netlify', 'Render'],
  Soft: ['Problem Solving', 'Self‑learning', 'Presentation', 'Teamwork']
};

const Skills = () => (
  <Box id="skills" sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>
      Technical & Soft Skills
    </Typography>
    {Object.entries(skills).map(([category, list]) => (
      <Box key={category} sx={{ mb: 2 }}>
        <Typography variant="h6">{category}</Typography>
        <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 1 }}>
          {list.map((skill) => (
            <Chip key={skill} label={skill} />
          ))}
        </Stack>
      </Box>
    ))}
  </Box>
);

export default Skills;
