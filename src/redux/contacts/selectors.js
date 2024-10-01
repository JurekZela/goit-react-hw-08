import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from '../filters/slice';

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter],
   (contacts, filter) =>  contacts.filter(({ name }) => name.toLowerCase().trim().includes(filter)));