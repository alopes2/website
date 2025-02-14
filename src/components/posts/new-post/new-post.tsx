'use client';

import {
  useState,
  type ChangeEvent,
  type ChangeEventHandler,
  type FormEvent,
} from 'react';
import classes from './new-post.module.scss';
import AppMarkdown from '@/components/shared/AppMarkdown';
import { Box, Paper } from '@mui/material';

export default function NewPost() {
  const [mode, setMode] = useState<'edit' | 'view'>('edit');
  const [story, setStory] = useState<string>();
  return (
    <Box sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <div className={classes.header}>
        <button
          onClick={() => setMode('edit')}
          className={[classes.button, classes.active].join(' ')}
        >
          Edit
        </button>
        <button onClick={() => setMode('view')} className={classes.button}>
          View
        </button>
        <div></div>
      </div>
      <Paper>
        <form className={classes.form}>
          {mode === 'edit' ? (
            <textarea
              className={classes.textarea}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                setStory(event.target?.value)
              }
              value={story}
            />
          ) : (
            <AppMarkdown slug={''} content={story} />
          )}
        </form>
      </Paper>
    </Box>
  );
}
