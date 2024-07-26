import classes from './all-posts.module.scss';
import Post from './post.model';
import PostsGrid from './posts-grid';

type AllPostsProps = {
  posts: Post[];
};

export default function AllPosts({ posts }: AllPostsProps) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}
