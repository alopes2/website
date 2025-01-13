import LatestPosts from '@/components/home-page/latest-posts';
import Hero from '@/components/home-page/hero';
import Summary from '@/components/home-page/summary';
import Skills from '@/components/home-page/skills';

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
