import PostContent from '@/components/posts/post-detail/post-content';
import { getPostData } from '@/lib/post-util';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

type PostDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 600;

export async function generateMetadata(
  props: PostDetailProps
): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  const imageUrl = `${process.env.ASSETS_PATH}/images/posts/${post.image}`;
  const postUrl = `/posts/${slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: 'article',
      url: postUrl,
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: ['Andre Lopes'],
      tags: ['software engineering', 'blog', 'tech'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  };
}

export default async function PostDetailPage(props: PostDetailProps) {
  const params = await props.params;

  const { slug } = params;

  const post = await getPostData(slug);

  if (!post) {
    return notFound();
  }

  return <PostContent post={post} />;
}
