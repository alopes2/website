import classes from './hero.module.scss';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/andre_lopes.jpg"
          alt="Andre Lopes"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I&apos;m Andre Lopes</h1>
      <p>I&apos;m a Full-stack Software Engineer</p>
    </section>
  );
}
