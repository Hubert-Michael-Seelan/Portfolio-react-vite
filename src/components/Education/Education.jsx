// src/components/Education/Education.jsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const eduData = [
  {
    degree: 'M.Sc. in Mathematics',
    school: 'Patrician College of Arts and Science, Chennai',
    period: 'Jul 2020 – Mar 2022'
  },
  {
    degree: 'B.Sc. in Mathematics',
    school: 'Patrician College of Arts and Science, Chennai',
    period: 'Jun 2017 – Mar 2020'
  },
];

const Education = () => (
  <Box id="education" sx={{ py: 4 }}>
    <Typography variant="h4" gutterBottom>
      Education
    </Typography>
    <List>
      {eduData.map((ed, i) => (
        <ListItem key={i} sx={{ pl: 0 }}>
          <ListItemText
            primary={`${ed.degree}`}
            secondary={`${ed.school} • ${ed.period}`}
          />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Education;
 