import LatestPosts from '@/components/home-page/latest-posts';
import Hero from '@/components/home-page/hero';
import Skills from '@/components/home-page/skills';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export const revalidate = 1;

export const dynamic = 'force-dynamic';

export default async function Home() {
  return (
    <>
      <Hero />
      {/* <Skills /> */}
      <LatestPosts />
    </>
  );
}
