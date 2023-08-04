import {Box, Stack, Typography} from '@mui/material';
import { PropertyReferralsInfo } from 'constants';

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

const ProgressBarProps=({title,
    percentage, color}:ProgressBarProps)=>(
      <Box width='100%' >
        <Stack direction='row'></Stack>
      </Box>
    )

const PropertyReferrals = () => {
  return (
    <Box id='chart' p={4} minWidth='490' bgcolor='#fcfcfc' minHeight='400px'
       display='flex' flexDirection="column" borderRadius="15px" >

         <Typography>
            Property Referrals
          </Typography>

          <Stack my='20px' direction='column' gap={4}></Stack>
       </Box>
  )
}

export default PropertyReferrals