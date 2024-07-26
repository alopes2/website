import PostContent from '@/components/posts/post-detail/post-content';
import { getPostData } from '@/lib/post-util';
import { notFound } from 'next/navigation';

type PostDetailProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 600;

export async function generateMetadata({ params: { slug } }: PostDetailProps) {
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostDetailPage({
  params: { slug },
}: PostDetailProps) {
  const post = await getPostData(slug);

  if (!post) {
    return notFound();
  }

  return <PostContent post={post} />;
}
