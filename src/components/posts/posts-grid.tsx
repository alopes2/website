import PostItem from './post-item';
import Post from './post.model';
import classes from './posts-grid.module.scss';

type PostsGridProps = {
  posts: Post[];
  admin?: boolean;
};

export default function PostsGrid({ posts }: PostsGridProps) {
  return (
    <div className={classes.grid}>
      {posts.map((post) => (
        <PostItem admin key={post.slug} post={post} />
      ))}
    </div>
  );
}
