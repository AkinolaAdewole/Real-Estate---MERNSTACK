import React from 'react'
import { Add, RemoveFromQueue } from '@mui/icons-material'
import { useList } from '@refinedev/core'
import {Box, Stack, Typography} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { PropertyCard, CustomButton } from 'components';

const AllProperties = () => {
  const navigate = useNavigate();
  return (
    <div>All-Properties</div>
  )
}

export default AllProperties