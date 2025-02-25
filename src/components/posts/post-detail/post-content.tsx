import type Post from '../post.model';
import PostHeader from './post-header';
import classes from './post-content.module.scss';
import { Box, Container, Paper } from '@mui/material';
import AppMarkdown from '@/components/shared/AppMarkdown';
import Script from 'next/script';

type PostContentProps = {
  post: Post;
};

export default function PostContent({ post }: PostContentProps) {
  const imagePath = `${process.env.ASSETS_PATH}/images/posts/${post.image}`;
  const postUrl = `https://www.andrevitorlopes.com/posts/${post.slug}`;

  // Create structured data for the blog post
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: imagePath,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Andre Lopes',
      url: 'https://www.andrevitorlopes.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Andre Lopes',
      logo: {
        '@type': 'ImageObject',
        url: 'https://d2excru8gljel8.cloudfront.net/andre_lopes.jpg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
  };

  return (
    <article>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Container>
        <Paper sx={{ paddingX: 5, paddingY: 2, marginY: 5 }}>
          <PostHeader title={post.title} image={imagePath} />
          <AppMarkdown slug={post.slug} content={post.content}></AppMarkdown>
        </Paper>
      </Container>
    </article>
  );
}
