import React from 'react'
import { useList } from '@refinedev/core/dist/hooks';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import  Stack  from '@mui/material/Stack';
import Container from '@mui/material/Container'

import { PieChartProps } from 'interfaces/Home';

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from "components"


const Home = () => {
  return (
        <Box >
          <Container>
               
              <Typography fontSize={25} fontWeight={700}
                color='#11142D'>
                Dashboard
              </Typography>

              <Box mt='10px' display='flex' sx={{ flexWrap: 'wrap' }}
                  gap={3}>

                  <PieChart
                        title="Properties for Sale"
                        value={684}
                        series={[75, 25]}
                        colors={["#275be8", "#c4e8ef"]}
                    />
                    <PieChart
                        title="Properties for Rent"
                        value={550}
                        series={[60, 40]}
                        colors={["#275be8", "#c4e8ef"]}
                    />
                    <PieChart
                        title="Total customers"
                        value={5684}
                        series={[75, 25]}
                        colors={["#275be8", "#c4e8ef"]}
                    />
                    <PieChart
                        title="Properties for Cities"
                        value={555}
                        series={[75, 25]}
                        colors={["#275be8", "#c4e8ef"]}
                    />
                        

              </Box>

              <Container>
                    <Stack
                          mt="25px"
                          width="100%"
                          direction={{ xs: "column", lg: "row" }}
                          gap={4}
                          display='flex'
                      >
                            <TotalRevenue />
                            <PropertyReferrals />
                          
                      </Stack>
              </Container>

          </Container>
          

        </Box>
  )
}

export default Home