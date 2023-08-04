import {Box, Stack, Typography} from '@mui/material';
import { PropertyReferralsInfo } from 'constants';

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

const PropertyReferrals = () => {
  return (
    <Box id='chart' p={4} flex={1} bgcolor='#fcfcfc' minHeight='400px'
       display='flex' flexDirection="column" borderRadius="15px" ></Box>
  )
}

export default PropertyReferrals