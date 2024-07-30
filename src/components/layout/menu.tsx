'use client';

import Link from 'next/link';

import classes from './menu.module.scss';
import { useState } from 'react';

export default function Menu() {
  const [open, setOpen] = useState(false);

  const navClasses = [classes.burger];

  if (open) {
    navClasses.push(classes.open);
  }

  const onClickHandler = () => {
    setOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <nav className={classes.menu}>
      <button onClick={onClickHandler} className={navClasses.join(' ')}>
        <div />
        <div />
        <div />
      </button>
      <ul>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
