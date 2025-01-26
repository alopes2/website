import type Post from './post.model';
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import PostsGrid from './posts-grid';
import type { FormEvent } from 'react';
import { redirect, RedirectType } from 'next/navigation';
import AdminPostsForm from './admin-posts-form/admin-posts-form';

type AdminPostsTabsProps = {
  posts: Post[];
  type: string;
};

export default function AdminPostsTabs({ posts, type }: AdminPostsTabsProps) {
  return (
    <>
      <AdminPostsForm type={type} />
      <PostsGrid posts={posts} />
    </>
  );
}
