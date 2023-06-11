import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilterValue(state, action) {
      state.filter = action.payload.toLowerCase();
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
