import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from '../../redux/contacts/contacts-slice';
import { setFilter } from '../../redux/filter/filter-slice';
import { getFilteredContacts } from '../../redux/selectors';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import FilterInput from './ContactFiltr/ContactFiltr';

import styles from './phonebook.module.css';

const Phonebook = () => {
  const contacts = useSelector(getFilteredContacts);
  // const filter = useSelector(getFilter);

  const dispatch = useDispatch();

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

  //  const items = getFilteredContacts();

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
