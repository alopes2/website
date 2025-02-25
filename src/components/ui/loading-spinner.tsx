'use client';

import { Box, CircularProgress, Typography } from '@mui/material';

type LoadingSpinnerProps = {
  message?: string;
};

export default function LoadingSpinner({
  message = 'Loading...',
}: LoadingSpinnerProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
        minHeight: '200px',
      }}
    >
      <CircularProgress size={40} thickness={4} />
      <Typography variant="h6" sx={{ mt: 2 }}>
        {message}
      </Typography>
    </Box>
  );
}
