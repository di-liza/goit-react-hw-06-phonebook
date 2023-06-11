import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './constactsSlice';
import { filterSlice } from './filterSlice';

console.log('contactsSlice:', contactsSlice.reducer);
export const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
