'use client';
import {
  Button,
  ButtonGroup,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { redirect } from 'next/navigation';
import { useState, type FormEvent } from 'react';

type FormProps = {
  type: string;
};

export default function AdminPostsForm({ type }: FormProps) {
  const [value, setValue] = useState<string>(type);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    redirect('/admin/posts?type=' + value);
  };

  return (
    <form onSubmit={onSubmit}>
      <FormControl sx={{ marginBottom: '1.5rem' }}>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="all"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          name="postsType"
          row
        >
          <FormControlLabel value="all" control={<Radio />} label="All" />
          <FormControlLabel value="draft" control={<Radio />} label="Draft" />
          <FormControlLabel
            value="published"
            control={<Radio />}
            label="Published"
          />
        </RadioGroup>
        <ButtonGroup>
          <Button type="submit" variant="contained" size="small">
            Search
          </Button>
        </ButtonGroup>
      </FormControl>
    </form>
  );
}
