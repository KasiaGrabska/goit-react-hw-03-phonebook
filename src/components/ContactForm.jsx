import { nanoid } from 'nanoid';
import { useState } from 'react';
import styles from '../styles/contactForm.module.css';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedNumber = number.trim();
    if (!trimmedName || !trimmedNumber) return;
    addContact({ id: nanoid(), name: trimmedName, number: trimmedNumber });
    setName('');
    setNumber('');
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div>Name</div>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          value={name}
          onChange={event => setName(event.target.value)}
          required
        />
        <div>Number</div>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={event => setNumber(event.target.value)}
          required
        />
        <div>
          <button type="submit">Add Contact</button>
        </div>
      </form>
      <span></span>
    </>
  );
};
