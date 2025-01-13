'use client';

import Link from 'next/link';

import classes from './menu.module.scss';
import { useState } from 'react';
import NavLink from './nav-link';

export default function Menu() {
  const [open, setOpen] = useState(false);

  const navClasses = [classes.burger_wrapper];

  if (open) {
    navClasses.push(classes.open);
  }

  const onClickHandler = () => {
    if (window.innerWidth <= 768) {
      setOpen((prevState) => {
        return !prevState;
      });
    }
  };

  return (
    <nav className={classes.menu}>
      <button className={navClasses.join(' ')} onClick={onClickHandler}>
        <div className={classes.burger}>
          <div />
          <div />
          <div />
        </div>
        <div className={classes.close}>X</div>
      </button>
      <ul>
        <li>
          <NavLink exact href="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href="/posts">Posts</NavLink>
        </li>
      </ul>
    </nav>
  );
}
