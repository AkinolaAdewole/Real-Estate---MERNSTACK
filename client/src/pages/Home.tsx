import React from 'react'
import { useList } from '@refinedev/core/dist/hooks';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box"
import  Stack  from '@mui/material/Stack';

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from "components"


const Home = () => {
  return (
        <Box>
          <Typography fontSize={25} fontWeight={700}
            color='#11142D'>
             Dashboard
          </Typography>

          <Box mt='20px' display='flex'
           flexWrap='wrap' gap={4}>

                <PieChart 
                   title='Properties for sale'
                    value={684}
                    series={[75, 25]}
                    color={['#475be8', '#e4e8ef']}
                    />
                    
           </Box>

        </Box>
  )
}

export default Home