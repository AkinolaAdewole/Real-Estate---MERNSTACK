// Import necessary React and external libraries
import React from 'react';
import { useList } from '@refinedev/core/dist/hooks';
import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

// Import interface for props
import { PieChartProps } from 'interfaces/Home';

// Import custom components
import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
} from "components";

// Define the Home component
const Home = () => {
  return (
    // Outermost container for the Home component
    <Box>
      <Container>
        {/* Display a large heading for the dashboard */}
        <Typography fontSize={25} fontWeight={700} color='#11142D'>
          Dashboard
        </Typography>

        {/* Create a container for displaying PieCharts */}
        <Box mt='10px' display='flex' sx={{ flexWrap: 'wrap' }} gap={3}>
          {/* Display a PieChart component for 'Properties for Sale' */}
          <PieChart
            title="Properties for Sale"
            value={684}
            series={[75, 25]}
            colors={["#275be8", "#c4e8ef"]}
          />
          {/* Display a PieChart component for 'Properties for Rent' */}
          <PieChart
            title="Properties for Rent"
            value={550}
            series={[60, 40]}
            colors={["#275be8", "#c4e8ef"]}
          />
          {/* Display a PieChart component for 'Total customers' */}
          <PieChart
            title="Total customers"
            value={5684}
            series={[75, 25]}
            colors={["#275be8", "#c4e8ef"]}
          />
          {/* Display a PieChart component for 'Properties for Cities' */}
          <PieChart
            title="Properties for Cities"
            value={555}
            series={[75, 25]}
            colors={["#275be8", "#c4e8ef"]}
          />
        </Box>

        {/* Create a Stack layout for displaying components */}
        <Stack
          mt="25px"
          width="100%"
          direction={{ xs: "column", lg: "row" }}
          gap={4}
          display='flex'
        >
          {/* Display the 'TotalRevenue' component */}
          <TotalRevenue />
          {/* Display the 'PropertyReferrals' component */}
          <PropertyReferrals />
        </Stack>
      </Container>
    </Box>
  )
}

// Export the Home component as the default export
export default Home;
