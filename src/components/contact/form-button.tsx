import { useFormStatus } from 'react-dom';

export default function FormButton() {
  const { pending } = useFormStatus();

  const message = pending ? 'Sending...' : 'Send message';

  return <button disabled={pending}>{message}</button>;
}
