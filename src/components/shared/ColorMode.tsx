'use client';
import { useColorScheme } from '@mui/material';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import classes from './ColorMode.module.scss';

export default function ColorMode() {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  let newMode: 'light' | 'dark' = 'light';
  let icon = <LightModeIcon sx={{ color: 'white' }} />;

  if (mode == 'light') {
    newMode = 'dark';
    icon = <DarkModeIcon sx={{ color: 'white' }} />;
  }

  return (
    <div className={classes.colorMode} onClick={() => setMode(newMode)}>
      {icon}
    </div>
  );
}
