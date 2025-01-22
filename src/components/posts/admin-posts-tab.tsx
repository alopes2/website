'use client';
import { useState } from 'react';
import type Post from './post.model';
import { Box, Tab, Tabs } from '@mui/material';
import PostItem from './post-item';

interface AdminPostsTabsProps {
  draftPosts?: Post[];
  publishedPosts?: Post[];
}

export default function AdminPostsTabs({
  publishedPosts,
  draftPosts,
}: AdminPostsTabsProps) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Published" {...a11yProps(0)} />
          <Tab label="Draft" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {publishedPosts?.map((p) => (
          <PostItem post={p} key={p.slug} />
        ))}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {draftPosts?.map((p) => (
          <PostItem post={p} key={p.slug} />
        ))}
      </CustomTabPanel>
    </>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
