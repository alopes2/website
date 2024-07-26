import Post from '../posts/post.model';
import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.scss';

type FeaturedPostsProps = { posts: Post[] };

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
