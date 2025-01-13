import PostContent from '@/components/posts/post-detail/post-content';
import { getPostData } from '@/lib/post-util';
import { notFound } from 'next/navigation';

type PostDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 600;

export async function generateMetadata(props: PostDetailProps) {
  const params = await props.params;

  const {
    slug
  } = params;

  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostDetailPage(props: PostDetailProps) {
  const params = await props.params;

  const {
    slug
  } = params;

  const post = await getPostData(slug);

  if (!post) {
    return notFound();
  }

  return <PostContent post={post} />;
}
