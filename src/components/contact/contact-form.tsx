'use client';

import { sendMessage } from '@/actions/contact.actions';
import classes from './contact-form.module.scss';
import { useFormState } from 'react-dom';
// import { useActionState } from 'react';

import { useRef } from 'react';
import FormButton from './form-button';
import { toast } from 'react-toastify';

export default function ContactForm() {
  // const [state, formAction] = useActionState(sendMessage, { success: true });
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, formAction] = useFormState(sendMessage, {
    success: false,
  });

  if (formState.success) {
    toast.success('Thank you for your email!');
    formRef.current?.reset();
  }

  if (!formState.success && formState.message) {
    toast.error(formState.message);
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} action={formAction} ref={formRef}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">message</label>
          <textarea id="message" name="message" rows={5} required></textarea>
        </div>

        <div className={classes.actions}>
          <FormButton label="Send message" pendingLabel="Sending..." />
        </div>
      </form>
    </section>
  );
}
