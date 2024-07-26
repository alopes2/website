'use server';

import path from 'path';

import type Post from '@/components/posts/post.model';
import { MongoClient } from 'mongodb';

const connectionString = process.env.MONGODB_CONNECTION_STRING || '';
const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPostData(
  postIdentifier: string
): Promise<Post | null> {
  let client: MongoClient;

  try {
    client = await MongoClient.connect(connectionString);

    const db = client.db();

    const result = await db
      .collection('posts')
      .findOne<Post>({ slug: { $eq: postIdentifier } });

    client.close();

    return result;
  } catch (e: any) {
    console.error('Fetching posts failed', e);

    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  let client: MongoClient;

  try {
    client = await MongoClient.connect(connectionString);

    const db = client.db();

    const result = await db
      .collection('posts')
      .find()
      .project<Post>({})
      .sort({ date: -1 })
      .toArray();

    client.close();

    return result;
  } catch (e: any) {
    console.error('Fetching latest posts failed', e);

    return [];
  }
}

export async function getLatestPosts(): Promise<Post[]> {
  let client: MongoClient;

  try {
    client = await MongoClient.connect(connectionString);

    const db = client.db();

    const result = await db
      .collection('posts')
      .find()
      .project<Post>({})
      .sort({ date: -1 })
      .limit(6)
      .toArray();

    client.close();

    return result;
  } catch (e: any) {
    console.error('Fetching latest posts failed', e);

    return [];
  }
}
