import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import CodeloIcon from '../assets/icons/CodeloIcon'

export default function Loading() {
  return (
    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: "stretch" }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
        <Box className='animate__animated animate__pulse animate__infinite'>
          <CodeloIcon width="250px" height="250px" />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>Cargando...</Typography>
        <Box sx={{ width: '100%' }}>
          <LinearProgress color="warning" />
        </Box>
      </Box>
    </Box>
  )
}
