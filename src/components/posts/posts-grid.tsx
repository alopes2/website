import PostItem from './post-item';
import Post from './post.model';
import classes from './posts-grid.module.scss';

type PostsGridProps = {
  posts: Post[];
};

export default function PostsGrid({ posts }: PostsGridProps) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
