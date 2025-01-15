import { getLatestPosts } from '@/lib/post-util';
import Post from '../posts/post.model';
import PostsGrid from '../posts/posts-grid';
import classes from './latest-posts.module.scss';
import { Suspense } from 'react';
import Container from '@mui/material/Container';

type LatestPostsProps = { posts: Post[] };

// TODO: Change/outsource this component
export default async function LatestPosts() {
  const posts = await getLatestPosts();
  return (
    <Suspense fallback={<p>Fetching posts...</p>}>
      <LatestPostsComponent posts={posts} />
    </Suspense>
  );
}

function LatestPostsComponent({ posts }: LatestPostsProps) {
  return (
    <section className={classes.latest}>
      <Container>
        <h2>Recent Posts</h2>
        <PostsGrid posts={posts} />
      </Container>
    </section>
  );
}
