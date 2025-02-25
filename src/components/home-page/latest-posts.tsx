import { getLatestPosts } from '@/lib/post-util';
import Post from '../posts/post.model';
import PostsGrid from '../posts/posts-grid';
import classes from './latest-posts.module.scss';
import { Suspense } from 'react';
import Container from '@mui/material/Container';

// TODO: Change/outsource this component
export default function LatestPosts() {
  return (
    <section className={classes.latest}>
      <Container>
        <h2>Recent Posts</h2>
        <Suspense fallback={<p>Fetching posts...</p>}>
          <LatestPostsComponent />
        </Suspense>
      </Container>
    </section>
  );
}

async function LatestPostsComponent() {
  const posts = await getLatestPosts();
  return <PostsGrid posts={posts} />;
}
