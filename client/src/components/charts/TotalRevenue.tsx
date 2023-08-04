import React from 'react'
import ReactApexChart from 'react-apexcharts';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import  Stack  from '@mui/material/Stack';
import {ArrowCircleUpRounded} from '@mui/icons-material'
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config"; 

const TotalRevenue = () => {
  return (
    <Box id='chart' p={4} flex={1} bgcolor='#fcfcfc' 
     display='flex' flexDirection="column" borderRadius="15px" >
       <Typography>
         Total Revenue
       </Typography>
    </Box>
  )
}

export default TotalRevenue