import { ADD_CONTACT, DELETE_CONTACT } from './constants';

const initialState = {
  contacts: [
    // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_CONTACT:
      const { contacts } = state;
      return {
        contacts: [...contacts, payload],
      };

    case DELETE_CONTACT:
      const newContacts = state.contacts.filter(item => item.id !== payload);
      return {
        contacts: newContacts,
      };
    default:
      return state;
  }
};

export default reducer;
