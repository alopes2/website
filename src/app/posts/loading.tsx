import LoadingSpinner from '@/components/ui/loading-spinner';
import SkeletonLoader from '@/components/ui/skeleton-loader';
import { Container, Typography } from '@mui/material';

export default function PostsLoading() {
  return (
    <Container>
      <Typography
        variant="h2"
        sx={{ marginBottom: 3, marginTop: 4, textAlign: 'center' }}
      >
        All Posts
      </Typography>
      <SkeletonLoader count={4} />
    </Container>
  );
}
