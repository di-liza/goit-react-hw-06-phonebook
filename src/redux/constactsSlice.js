import { nanoid } from 'nanoid';

import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      const newContact = {
        name: action.payload.name,
        id: nanoid(),
        number: action.payload.number,
      };
      const isContactExists = state.some(
        contact =>
          contact.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      return isContactExists
        ? alert(`${action.payload.name} is already in contacts`)
        : (state = [newContact, ...state]);
    },
    deleteContact(state, action) {
      return (state = state.filter(contact => contact.id !== action.payload));
    },
  },
});

export const { deleteContact, addContact } = contactsSlice.actions;
