import {Box, Stack, Typography} from '@mui/material';
import { PropertyReferralsInfo } from "constants/index";

interface ProgressBarProps {
  title: string;
  percentage: number;
  color: string;
}

const ProgressBar=({title,
    percentage, color}:ProgressBarProps)=>(

      <Box width='300px' >
        <Stack direction='row' alignItems='center'
          justifyContent='space-between'>

            <Typography fontSize={16} fontWeight={500}
              color='#11142d'>
                {title}
            </Typography>

            <Typography fontSize={16} fontWeight={500}
              color='#11142d'>
                 {percentage}%
            </Typography>
          </Stack>

          <Box mt={2} position='relative' width='100%' height='8px'
           borderRadius={1} bgcolor='#e4e8ef'>
             <Box width={`${percentage}%`} bgcolor={color} position='absolute'
              height='100%' borderRadius={1}/>
           </Box>
      </Box>
    )

const PropertyReferrals = () => {
  return (
    <Box id='chart' p={4} minWidth='490' bgcolor='#fcfcfc' minHeight='400px'
       display='flex' flexDirection="column" borderRadius="15px" >

         <Typography>
            Property Referrals
          </Typography>

          <Stack my='20px' direction='column' gap={4}>
            {PropertyReferralsInfo.map((bar)=>(
              <ProgressBar key={bar.title} {... bar} />
            ))}
          </Stack>
       </Box>
  )
}

export default PropertyReferrals