import { Typography } from '@mui/material';
import classes from './all-posts.module.scss';
import Post from './post.model';
import PostsGrid from './posts-grid';

type AllPostsProps = {
  posts: Post[];
};

export default function AllPosts({ posts }: AllPostsProps) {
  return (
    <section className={classes.posts}>
      <Typography variant="h2" sx={{ marginBottom: 3 }}>
        All Posts
      </Typography>
      <PostsGrid posts={posts} />
    </section>
  );
}
