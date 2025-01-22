import NewPost from '@/components/posts/new-post/new-post';
import classes from './page.module.scss';

export default function NewPostPage() {
  return (
    <section className={classes.section}>
      <NewPost />
    </section>
  );
}
