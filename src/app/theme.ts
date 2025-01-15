'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: `#082479`,
    },
    secondary: {
      main: `#BA9638`,
    },
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    dark: true,
  },
});

export default theme;
