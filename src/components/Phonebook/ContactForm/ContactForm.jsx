import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../redux/contacts/contacts-slice';
import { getFilteredContacts } from '../../../redux/selectors';

import styles from './contact-form.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const nameInput = e.target.elements.name;
    const numberInput = e.target.elements.number;

    const normalizedName = nameInput.value.toLowerCase();
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (isDuplicate) {
      alert(`${nameInput.value} is already in contacts.`);
    } else {
      dispatch(
        addContact({
          id: nanoid(),
          name: nameInput.value,
          number: numberInput.value,
        })
      );
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" required placeholder="Name" />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="number">Number</label>
        <input type="tel" name="number" required placeholder="Number" />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default ContactForm;
