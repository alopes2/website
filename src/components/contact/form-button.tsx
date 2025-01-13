'use client';
import { useFormStatus } from 'react-dom';

type ButtonProps = {
  label: string;
  pendingLabel: string;
};
export default function FormButton({ label, pendingLabel }: ButtonProps) {
  const { pending } = useFormStatus();

  const message = pending ? pendingLabel : label;

  return <button disabled={pending}>{message}</button>;
}
