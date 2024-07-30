import Link from 'next/link';
import Logo from './logo';

import classes from './navigation.module.scss';
import Menu from './menu';

export default function Navigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <Menu />
    </header>
  );
}
