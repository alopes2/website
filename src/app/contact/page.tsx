import ContactForm from '@/components/contact/contact-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: 'Send me an email',
};

export default function ContactPage() {
  return <ContactForm />;
}
