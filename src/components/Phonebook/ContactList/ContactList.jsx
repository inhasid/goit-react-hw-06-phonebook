import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from '../../../redux/contacts/contacts-slice';
import { getFilteredContacts } from '../../../redux/selectors';

import styles from './contact-list.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const elements = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {' '}
      {name}: {number}{' '}
      <button onClick={() => handleDeleteContact(id)} type="button">
        Delete
      </button>
    </li>
  ));

  return <ul className={styles.list}>{elements}</ul>;
};

export default ContactList;
