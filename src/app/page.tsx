import FeaturedPosts from '@/components/home-page/featured-posts';
import Hero from '@/components/home-page/hero';
import { getLatestPosts } from '@/lib/post-util';
import { Suspense } from 'react';

export const revalidate = 1;

export const dynamic = 'force-dynamic';

// TODO: Change/outsource this component
async function FeaturedPostsBlock() {
  const posts = await getLatestPosts();
  return <FeaturedPosts posts={posts} />;
}

export default async function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<p>Fetching posts...</p>}>
        <FeaturedPostsBlock />
      </Suspense>
    </>
  );
}
