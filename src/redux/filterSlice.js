import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filter(state, action) {},
  },
});

export const { filter } = filterSlice.actions;
