import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';


export default function Stars({value}) {

  return (
    <Box sx={{ width: 130, display: 'inline-flex', alignItems: 'left' }} className="inline-flex justify-start items-center text-sm">
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Box>
  );
}
