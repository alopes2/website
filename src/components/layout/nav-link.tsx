'use client';

import Link from 'next/link';

import classes from './nav-link.module.scss';
import { usePathname } from 'next/navigation';

type LinkProps = {
  href: string;
  exact?: boolean;
};

export default function Menu({
  href,
  exact,
  children,
}: React.PropsWithChildren<LinkProps>) {
  const path = usePathname();

  const isPath = exact ? path == href : path.startsWith(href);

  const linkClasses = isPath
    ? `${classes.link} ${classes.active}`
    : `${classes.link}`;

  return (
    <Link href={href} className={linkClasses}>
      {children}
    </Link>
  );
}
