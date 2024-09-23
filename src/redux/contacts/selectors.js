import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from '../filters/filtersSlice';

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter],
   (contacts, filter) =>  {
    switch (filter) {
      case filter:
       return contacts.filter(({ name }) => name.toLowerCase().trim().includes(filter));
    
      default: 
      return contacts;
    }
   });