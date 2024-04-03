import { createSelector } from "@reduxjs/toolkit";
import { selectContacts } from '../contacts/selectors';

export const selectNameFilter = state => state.filters;

export const itemsFilter = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filterValue) => {
            if (filterValue.length > 0) {
                return contacts.filter(({ name }) => name.toLowerCase().trim().includes(filterValue))
            }
        return contacts;
    }
)