import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../../redux/contacts/contacts-slice';
import { setFilter } from '../../redux/filter/filter-slice';
import { getFilteredContacts } from '../../redux/selectors';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterInput from './ContactFiltr/ContactFiltr';

import { isDuplicate } from './helper';

import styles from './phonebook.module.css';

const Phonebook = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const onAddContact = data => {
    if (isDuplicate(contacts, data)) {
      return alert(`${data.name} is already in contacts.`);
    } else {
      dispatch(addContact(data));
    }
  };

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const changeFilter = ({ target }) => dispatch(setFilter(target.value));

  return (
    <div className={styles.wrapper}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />
      <h2>Contacts</h2>
      <FilterInput onChange={changeFilter} />
      <ContactList items={contacts} deleteContact={onDeleteContact} />
    </div>
  );
};

export default Phonebook;
