import AdminPostsTabs from '@/components/posts/admin-posts-tab';
import { getAllPosts, getPostsByType } from '@/lib/post-util';
import { Container } from '@mui/material';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin: Manage Posts',
  description: 'Admin dashboard to manage blog posts',
  robots: {
    index: false,
    follow: false,
  },
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
  return <AdminPostsTabs posts={posts} type={type} />;
}
