import Image from 'next/image';
import Link from 'next/link';
import classes from './post-item.module.scss';
import Post from './post.model';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

type PostItemProps = {
  post: Post;
  admin: boolean;
};

export default function PostItem({ post, admin }: PostItemProps) {
  const date = new Date(post.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const imagePath = `${process.env.ASSETS_PATH}/images/posts/${post.image}`;

  let linkPath = `/posts/${post.slug}`;
  if (admin) {
    linkPath = `/admin${linkPath}`;
  }

  return (
    <>
      <Card className={classes.post} sx={{ width: 250 }}>
        <CardMedia
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        >
          <Link href={linkPath}>
            <Image
              className={classes.image}
              src={imagePath}
              alt={`Cover image for ${post.title}`}
              width={345}
              height={150}
              priority={false}
              sizes="(max-width: 768px) 100vw, 345px"
            />
          </Link>
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="time"
            sx={{ color: 'text.secondary', fontStyle: 'italic' }}
          >
            {date}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            {post.excerpt}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={linkPath}>
            <Button size="small">Read More</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}
