import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logout, } from "../auth/operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contactInfo',
  initialState,
  extraReducers: builder => {
    builder
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items.push(action.payload);
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== action.payload.id) 
    })
    .addCase(logout.fulfilled, () => {
      return initialState;
    })
    .addMatcher(isAnyOf(deleteContact.pending, fetchContacts.pending, addContact.pending), (state) => {
      state.loading = true;
    })
    .addMatcher(isAnyOf(deleteContact.rejected, fetchContacts.rejected, addContact.rejected), (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
  },
})

export const contactsReducer = contactsSlice.reducer