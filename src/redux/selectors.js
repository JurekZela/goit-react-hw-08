import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = state => state.filters;
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const itemsFilter = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filterValue) => {
            if (filterValue.length > 0) {
                return contacts.filter(({ name }) => name.toLowerCase().trim().includes(filterValue))
            }
        return contacts;
    }
)