import React from 'react';

import{Box, Typography, Stack} from '@mui/material';
import { PieChartProps } from 'interfaces/Home';

const PieChart = ({
  title, value, series, colors
}:PieChartProps) => {
  return (
    <Box>
      <Stack direction="column">
        <Typography fontSize={14}
         color="#808191">
             {title} 
          </Typography>

        <Typography fontSize={14} color='#11142d'
          fontWeight={700} mt={1}>
             {value}
          </Typography>
      </Stack>
    </Box>
  );
};

export default PieChart;
