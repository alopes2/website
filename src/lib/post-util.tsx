'use server';

import type Post from '@/components/posts/post.model';
import { MongoClient, type Document, type Filter } from 'mongodb';
import 'server-only';

const connectionString = process.env.MONGODB_CONNECTION_STRING || '';

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

export async function getPublishedPosts(): Promise<Post[]> {
  let client: MongoClient;

  try {
    client = await MongoClient.connect(connectionString);

    const db = client.db();

    const result = await db
      .collection('posts')
      .find({ isPublished: true })
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

export async function getPostsByType(type: string): Promise<Post[]> {
  let client: MongoClient;

  try {
    client = await MongoClient.connect(connectionString);

    const db = client.db();
    let postsFilter: Filter<Document> = {};
    if (type == 'draft') {
      postsFilter = { isPublished: { $in: [null, false] } };
    }

    if (type === 'published') {
      postsFilter = { isPublished: true };
    }

    const result = await db
      .collection('posts')
      .find(postsFilter)
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
