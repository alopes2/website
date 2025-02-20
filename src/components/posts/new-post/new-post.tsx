'use client';

import {
  useState,
  type ChangeEvent,
  type DragEventHandler,
  type DragEvent,
} from 'react';
import classes from './new-post.module.scss';
import AppMarkdown from '@/components/shared/AppMarkdown';
import { Box, Paper } from '@mui/material';

export default function NewPost() {
  const [mode, setMode] = useState<'edit' | 'view'>('edit');
  const [story, setStory] = useState<string>('');

  const getCaretLine = (
    textarea: HTMLTextAreaElement,
    clientX: number,
    clientY: number
  ): number => {
    const textareaRect = textarea.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(textarea);

    // Get padding
    const paddingTop = parseInt(computedStyle.paddingTop) || 0;

    // Calculate line height - if 'normal', estimate based on font size
    let lineHeight: number;
    if (computedStyle.lineHeight === 'normal') {
      const fontSize = parseInt(computedStyle.fontSize) || 16;
      lineHeight = Math.floor(fontSize * 1.2); // typical browser line-height
    } else {
      lineHeight = parseInt(computedStyle.lineHeight) || 20; // fallback to 20px
    }

    // Calculate relative Y position
    const relativeY =
      clientY - textareaRect.top - paddingTop + textarea.scrollTop;
    const lineNumber = Math.floor(relativeY / lineHeight);

    // Get all lines
    const lines = textarea.value.split('\n');

    // Ensure line number is within bounds
    const targetLine = Math.max(0, Math.min(lineNumber, lines.length - 1));

    // Calculate the character index for the start of the target line
    let index = 0;
    for (let i = 0; i < targetLine; i++) {
      index += lines[i].length + 1; // +1 for the newline character
    }

    return index;
  };

  const onDrop: DragEventHandler<HTMLTextAreaElement> = async (
    event: DragEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();

    const files = Array.from(event.dataTransfer.files);
    if (files.length === 0) return;

    const file = files[0];
    // TODO: Handle file upload to S3, add a placeholder text for the image, and then replace the placeholder text with the image when the image is uploaded
    const textarea = event.target as HTMLTextAreaElement;
    textarea.focus();

    const insertPosition = getCaretLine(textarea, event.clientX, event.clientY);

    setStory((prevStory: string) => {
      const lines = prevStory.split('\n');
      const insertLineNumber =
        prevStory.slice(0, insertPosition).split('\n').length - 1;

      lines.splice(insertLineNumber + 1, 0, 'droppedText');
      return lines.join('\n');
    });
  };

  return (
    <Box sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <div className={classes.header}>
        <button
          onClick={() => setMode('edit')}
          className={[classes.button, mode === 'edit' && classes.active].join(
            ' '
          )}
        >
          Edit
        </button>
        <button
          onClick={() => setMode('view')}
          className={[classes.button, mode === 'view' && classes.active].join(
            ' '
          )}
        >
          View
        </button>
        <div></div>
      </div>
      <form className={classes.form}>
        <Paper>
          {mode === 'edit' ? (
            <>
              <textarea
                className={classes.textarea}
                onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
                  setStory(event.target?.value)
                }
                value={story}
                onDrop={onDrop}
              />
            </>
          ) : (
            <AppMarkdown slug={''} content={story} />
          )}
        </Paper>
      </form>
    </Box>
  );
}
