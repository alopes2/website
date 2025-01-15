import Link from 'next/link';
import Logo from './logo';

import classes from './navigation.module.scss';
import Menu from './menu';
import { Container } from '@mui/material';

export default function Navigation() {
  return (
    <header className={classes.header}>
      <Container className={classes.headerContainer}>
        <Link href="/">
          <Logo />
        </Link>
        <Menu />
      </Container>
    </header>
  );
}
