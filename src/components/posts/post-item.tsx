import Image from 'next/image';
import Link from 'next/link';
import classes from './post-item.module.scss';
import Post from './post.model';

type PostItemProps = {
  post: Post;
};

export default function PostItem({ post }: PostItemProps) {
  const date = new Date(post.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const imagePath = `${process.env.ASSETS_PATH}/images/posts/${post.image}`;

  const linkPath = `/posts/${post.slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image
            src={imagePath}
            alt={post.title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{post.title}</h3>
          <time>{date}</time>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </li>
  );
}
