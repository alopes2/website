import classes from './summary.module.scss';

export default function Summary() {
  return (
    <section className={classes.summary}>
      <p>
        I'm a brazilian Full-Stack Software Engineer living in Berlin with years
        of experience in web development.
      </p>
      <p>
        I'm passionated about cloud architecture, full-stack development, and
        infrastructure as a code. I'm also passionated about sharing my
        knowledge through my blog posts and love to learn new things so I can
        write about them.
      </p>
      <q>The best way to learn is to teach</q>
    </section>
  );
}
