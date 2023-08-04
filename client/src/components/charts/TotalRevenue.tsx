import React from 'react'
import ReactApexChart from 'react-apexcharts';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import  Stack  from '@mui/material/Stack';
import {ArrowCircleUpRounded} from '@mui/icons-material'
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config"; 

const TotalRevenue = () => {
  return (
    <Box id='chart' p={4} flex={1} bgcolor='#fcfcfc' minHeight='200px'
       display='flex' flexDirection="column" borderRadius="15px" >

          <Typography>
            Total Revenue
          </Typography>

          <Stack my='18px' direction="row" gap={3}
              flexWrap="wrap">

              <Typography fontSize={28} 
                fontWeight={700} color='#11142d'>$236,532</Typography>

              <Stack direction='row' alignItems="center" gap={1}>
                  <ArrowCircleUpRounded sx={{ fontSize:25, color:'#475be8'}}/>

                  <Stack>
                    <Typography fontSize={15} color="#475be8">0.8%</Typography>
                  </Stack>

                  <Stack>
                    <Typography fontSize={12} color="#808191">
                      than last month
                    </Typography>
                  </Stack>  

              </Stack>
          </Stack> 

          <ReactApexChart
                series={TotalRevenueSeries}
                type="bar"
                height={280}
                options={TotalRevenueOptions}
            />

    </Box>
  )
}

export default TotalRevenue