'use client';

import {
  Box,
  Skeleton,
  Card,
  CardContent,
  CardActions,
  CardMedia,
} from '@mui/material';

type SkeletonLoaderProps = {
  count?: number;
  type?: 'post' | 'detail';
};

export default function SkeletonLoader({
  count = 8,
  type = 'post',
}: SkeletonLoaderProps) {
  if (type === 'detail') {
    return (
      <Box sx={{ width: '100%', padding: 2 }}>
        <Skeleton
          variant="text"
          sx={{ fontSize: '2rem', width: '70%', mx: 'auto', mb: 2 }}
        />
        <Skeleton variant="rectangular" height={300} sx={{ mb: 2 }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem', mb: 1 }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem', mb: 1 }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem', mb: 1 }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem', mb: 1 }} />
        <Skeleton variant="text" sx={{ fontSize: '1rem', width: '80%' }} />
      </Box>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '2rem',
        alignItems: 'start',
        justifyItems: 'start',
      }}
    >
      {Array.from(new Array(count)).map((_, index) => (
        <Card key={index} sx={{ width: 250 }}>
          <CardMedia sx={{ height: 150 }}>
            <Skeleton variant="rectangular" width="100%" height={150} />
          </CardMedia>
          <CardContent>
            <Skeleton variant="text" sx={{ fontSize: '1.5rem', mb: 1 }} />
            <Skeleton
              variant="text"
              sx={{ fontSize: '0.875rem', mb: 2, width: '60%' }}
            />
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', width: '80%' }} />
          </CardContent>
          <CardActions>
            <Skeleton
              variant="rectangular"
              width={80}
              height={30}
              sx={{ borderRadius: 1 }}
            />
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
