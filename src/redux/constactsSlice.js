import { nanoid } from 'nanoid';

import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      const newContact = {
        name: action.payload.name,
        id: nanoid(),
        number: action.payload.number,
      };
      const isContactExists = state.contacts.some(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (isContactExists) {
        return alert(`${action.payload.name} is already in contacts`);
      }
      state.contacts = [newContact, ...state.contacts];
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { deleteContact, addContact } = contactsSlice.actions;
