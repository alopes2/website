import AllPosts from '@/components/posts/all-post';
import { getAllPosts } from '@/lib/post-util';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All my posts',
  description: 'A list of everything I blogged about',
};

export default async function AllPostsPage() {
  const posts = await getAllPosts();
  return <AllPosts posts={posts} />;
}
