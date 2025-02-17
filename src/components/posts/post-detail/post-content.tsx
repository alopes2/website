import type Post from '../post.model';
import PostHeader from './post-header';
import classes from './post-content.module.scss';
import { Box, Container, Paper } from '@mui/material';
import AppMarkdown from '@/components/shared/AppMarkdown';

type PostContentProps = {
  post: Post;
};

export default function PostContent({ post }: PostContentProps) {
  const imagePath = `${process.env.ASSETS_PATH}/images/posts/${post.image}`;

  return (
    <article>
      <Container>
        <Paper sx={{ paddingX: 5, paddingY: 2, marginY: 5 }}>
          <PostHeader title={post.title} image={imagePath} />
          <AppMarkdown slug={post.slug} content={post.content}></AppMarkdown>
        </Paper>
      </Container>
    </article>
  );
}
