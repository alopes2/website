'use server';

import { MongoClient } from 'mongodb';
import 'server-only';

type Message = {
  email: string;
  name: string;
  message: string;
};

type SendMessageState = {
  success: boolean;
  message?: string;
};

export async function sendMessage(
  state: SendMessageState,
  payload: FormData
): Promise<SendMessageState> {
  const email = payload.get('email')?.toString();
  const name = payload.get('name')?.toString();
  const message = payload.get('message')?.toString();

  if (
    !email ||
    !email.includes('@') ||
    !name ||
    name.trim() === '' ||
    !message ||
    name.trim() === ''
  ) {
    return { success: false, message: 'Validation failed' };
  }

  const newMessage: Message = {
    email,
    name,
    message,
  };

  const connectionString = process.env.MONGODB_CONNECTION_STRING || '';

  let client: MongoClient;

  try {
    client = await MongoClient.connect(connectionString);

    const db = client.db();

    const result = await db.collection('messages').insertOne(newMessage);

    client.close();
  } catch (e: any) {
    console.error('Saving contact message failed', e);
    return { success: false, message: e.message };
  }

  return { success: true, message: 'Success!' };
}
