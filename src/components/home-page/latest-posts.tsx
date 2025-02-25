import { getLatestPosts } from '@/lib/post-util';
import Post from '../posts/post.model';
import PostsGrid from '../posts/posts-grid';
import classes from './latest-posts.module.scss';
import { Suspense } from 'react';
import Container from '@mui/material/Container';
import SkeletonLoader from '@/components/ui/skeleton-loader';

// Separate component for fetching posts
async function LatestPostsComponent() {
  const posts = await getLatestPosts();
  return <PostsGrid posts={posts} />;
}

export default function LatestPosts() {
  return (
    <section className={classes.latest}>
      <Container>
        <h2>Recent Posts</h2>
        <Suspense fallback={<SkeletonLoader count={6} />}>
          <LatestPostsComponent />
        </Suspense>
      </Container>
    </section>
  );
}
