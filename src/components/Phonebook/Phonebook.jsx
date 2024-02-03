import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../../redux/actions';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterInput from './ContactFiltr/ContactFiltr';

import styles from './phonebook.module.css';

const Phonebook = () => {
  const contacts = useSelector(store => store.contacts);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState('');

  const isDuplicate = ({ name }) => {
    const normalizedName = name.toLowerCase();

    const duplicate = contacts.find(item => {
      const normalizedCurrentName = item.name.toLowerCase();
      return normalizedName === normalizedCurrentName;
    });

    return Boolean(duplicate);
  };

  const onAddContact = data => {
    if (isDuplicate(data)) {
      return alert(`${data.name} is already in contacts.`);
    }

    const action = addContact(data);
    dispatch(action);
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  //   const changeFilter = ({ target }) => setFilter(target.value);

  //   const getFilteredContacts = () => {
  //     if (!filter) {
  //       return contacts;
  //     }

  //     const normalizedFilter = filter.toLowerCase();

  //     const filteredContacts = contacts.filter(({ name }) => {
  //       const normalizedName = name.toLowerCase();

  //       return normalizedName.includes(normalizedFilter);
  //     });

  //     return filteredContacts;
  //   };

  //   const items = getFilteredContacts();

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <FilterInput value={filter} />
      <ContactList items={contacts} deleteContact={onDeleteContact} />
    </div>
  );
};

export default Phonebook;
