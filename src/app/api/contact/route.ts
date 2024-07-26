import type { NextRequest } from 'next/server';

type ContactMessageRequest = {
  email: string;
  name: string;
  message: string;
};

type Message = {
  email: string;
  name: string;
  message: string;
};

export async function POST(request: Request) {
  const { email, name, message }: ContactMessageRequest = await request.json();

  if (
    !email ||
    !email.includes('@') ||
    !name ||
    name.trim() === '' ||
    !message ||
    name.trim() === ''
  ) {
    return Response.json({ message: 'Invalid input' }, { status: 400 });
  }

  const newMessage: Message = {
    email,
    name,
    message,
  };

  return Response.json(
    { message: 'Successfully stored messaged', newMessage: newMessage },
    { status: 201 }
  );
}
