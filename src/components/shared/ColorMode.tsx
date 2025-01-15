'use client';
import { Paper, useColorScheme, useTheme } from '@mui/material';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import classes from './ColorMode.module.scss';

export default function ColorMode() {
  const { mode, setMode } = useColorScheme();
  const { typography } = useTheme();
  if (!mode) {
    return null;
  }

  let icon = (
    <LightModeIcon sx={{ color: 'white' }} onClick={() => setMode('light')} />
  );

  if (mode == 'light') {
    icon = (
      <DarkModeIcon sx={{ color: 'white' }} onClick={() => setMode('dark')} />
    );
  }

  return <div className={classes.colorMode}>{icon}</div>;
}
