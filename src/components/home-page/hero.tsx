import classes from './hero.module.scss';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div>
        <div className={classes.image}>
          <Image
            src="/images/andre_lopes.jpg"
            alt="Andre Lopes"
            width={200}
            height={200}
          />
        </div>
        <h2>Hi, I&apos;m Andre Lopes</h2>
        <p>I&apos;m a Full-stack Software Engineer</p>
        <p className={classes.intro}>
          Welcome to my personal page, where I blog about tech topics like AWS,
          cloud architecture, programming, DevOps, Infrastructure as Code, and
          other Software Engineering topics.
        </p>
      </div>
    </section>
  );
}
