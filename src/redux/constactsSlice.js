import { createSlice } from '@reduxjs/toolkit';

// import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      return (state = [action.payload, ...state]);
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
