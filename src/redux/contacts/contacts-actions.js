import { nanoid } from 'nanoid';

import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/addContact', data => {
  return {
    payload: {
      id: nanoid(),
      ...data,
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact');
