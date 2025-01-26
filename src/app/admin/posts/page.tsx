import AdminPostsTabs from '@/components/posts/admin-posts-tab';
import { getAllPosts, getDraftPosts, getPostsByType } from '@/lib/post-util';
import { Container } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All my posts',
  description: 'A list of everything I blogged about',
};

type PropsWithSearchParams = {
  searchParams: Promise<{
    type: string;
  }>;
};

export default async function AllPostsPage({
  searchParams,
}: PropsWithSearchParams) {
  let { type } = await searchParams;
  type = type || 'all';
  const posts = await getPostsByType(type);
  return (
    <Container>
      <AdminPostsTabs posts={posts} type={type} />
    </Container>
  );
}
