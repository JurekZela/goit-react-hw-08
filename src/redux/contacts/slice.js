import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContact } from './operations';

const pendingContact = (state, action) => {
  state.isLoading = true;
};

const rejectedContact = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};


const contactsSlice = createSlice({
    name: 'contactInfo',
        initialState: {
              items: [],
              isLoading: false,
              error: null,
          },
        extraReducers: builder => {
          builder
           .addCase(fetchContacts.pending, pendingContact)
           .addCase(fetchContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
           })
           .addCase(fetchContacts.rejected, rejectedContact)
           .addCase(addContacts.pending, pendingContact)
           .addCase(addContacts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);

           })
           .addCase(addContacts.rejected, rejectedContact)
           .addCase(deleteContact.pending, pendingContact)
           .addCase(deleteContact.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;

            const index = state.items.findIndex(
              item => item.id === action.payload.id
            )

            state.items.splice(index, 1);
          })
           .addCase(deleteContact.rejected, rejectedContact)
        }
      });

export const contactsReducer = contactsSlice.reducer;