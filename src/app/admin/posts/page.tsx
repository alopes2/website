import AdminPostsTabs from '@/components/posts/admin-posts-tab';
import { getAllPosts, getDraftPosts } from '@/lib/post-util';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All my posts',
  description: 'A list of everything I blogged about',
};

export default async function AllPostsPage() {
  const posts = await getAllPosts();
  const draftPosts = await getDraftPosts();
  return <AdminPostsTabs publishedPosts={posts} draftPosts={draftPosts} />;
}
