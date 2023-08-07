import React from 'react'
import { Add, RemoveFromQueue } from '@mui/icons-material'
import { useList } from '@refinedev/core'
import {Box, Stack, Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { PropertyCard, CustomButton } from 'components';

const AllProperties = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Stack direction='row' justifyContent='space-between'
        alignItems='center'>
         <Typography fontWeight={700} color="#11142d">
           All Properties
         </Typography>

         <CustomButton title="Add Properties"
           handleClick={()=>navigate('/Properties/create')}
            backgroundColor='#475be8'
            color='#fcfcfc'
             icon={<Add />}/>
       </Stack>
    </Box>
  )
}

export default AllProperties