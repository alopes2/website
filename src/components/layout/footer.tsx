import classes from './footer.module.scss';

export default function Navigation() {
  return (
    <footer className={classes.footer} style={{ flexShrink: 0 }}>
      <p>Copyright © 2025 Andre Lopes</p>
    </footer>
  );
}
