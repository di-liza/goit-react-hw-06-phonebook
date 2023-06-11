// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

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
// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const persistedContacts = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

export const { deleteContact, addContact } = contactsSlice.actions;

// _____________Selectors_______________

export const getContactsSelector = state => state.contacts;
