import { Box, Container } from '@mui/material';
import classes from './footer.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedIn } from '@mui/icons-material';
import Link from 'next/link';

export default function Navigation() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.footer} style={{ flexShrink: 0 }}>
      <Container
        sx={{ display: 'grid', gridTemplateColumns: '2fr 1fr', height: '100%' }}
      >
        <Box
          sx={{
            textAlign: 'left',
            alignSelf: 'center',
            height: 'fit-content',
          }}
        >
          <p>Copyright © {currentYear} Andre Lopes</p>
        </Box>
        <Box
          sx={{
            justifySelf: 'end',
            alignSelf: 'center',
            height: 'fit-content',
          }}
        >
          <Link href="https://github.com/alopes2" target="_blank">
            <GitHubIcon />
          </Link>
          <Link href="https://linkedin.com/in/andrevitorlopes" target="_blank">
            <LinkedIn />
          </Link>
        </Box>
      </Container>
    </footer>
  );
}
