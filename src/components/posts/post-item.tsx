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
    <>
      <Card className={classes.post} sx={{ width: 250 }}>
        <CardMedia
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        >
          <Image
            className={classes.image}
            src={imagePath}
            alt={post.title}
            width={345}
            height={150}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant="subtitle2"
            component="time"
            sx={{ color: 'text.secondary' }}
          >
            {date}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1 }}>
            {post.excerpt}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={linkPath}>
            <Button size="small">Read more</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
}
