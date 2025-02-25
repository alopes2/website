'use client';

import { Container, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', my: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Something went wrong
        </Typography>
        <Typography variant="body1" paragraph>
          Sorry, an unexpected error occurred.
        </Typography>
        <Link href="/" passHref>
          <Button variant="contained" color="primary">
            Return to Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
