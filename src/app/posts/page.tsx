import AllPosts from '@/components/posts/all-post';
import { getPostsByType } from '@/lib/post-util';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description:
    'Browse all articles about AWS, cloud architecture, programming, DevOps, Infrastructure as Code, and other Software Engineering topics.',
  keywords: [
    'blog posts',
    'software engineering',
    'AWS',
    'cloud architecture',
    'programming',
    'DevOps',
  ],
  alternates: {
    canonical: '/posts',
  },
  openGraph: {
    type: 'website',
    url: '/posts',
    title: 'All Posts | Andre Lopes',
    description:
      'Browse all articles about AWS, cloud architecture, programming, DevOps, Infrastructure as Code, and other Software Engineering topics.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Posts | Andre Lopes',
    description:
      'Browse all articles about AWS, cloud architecture, programming, DevOps, Infrastructure as Code, and other Software Engineering topics.',
  },
};

export default async function AllPostsPage() {
  const posts = await getPostsByType('published');
  return <AllPosts posts={posts} />;
}
