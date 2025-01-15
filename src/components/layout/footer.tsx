import { Box, Container } from '@mui/material';
import classes from './footer.module.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import { LinkedIn } from '@mui/icons-material';

export default function Navigation() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={classes.footer} style={{ flexShrink: 0 }}>
      <Container sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        <Box sx={{ textAlign: 'left' }}>
          <p>Copyright © {currentYear} Andre Lopes</p>
        </Box>
        <Box
          sx={{
            justifySelf: 'end',
            alignSelf: 'center',
            height: 'fit-content',
          }}
        >
          <GitHubIcon />
          <LinkedIn />
        </Box>
      </Container>
    </footer>
  );
}
