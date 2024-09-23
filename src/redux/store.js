import { configureStore } from "@reduxjs/toolkit";
import authSlice from '../redux/auth/authSlice';
import contactsReducer from './contacts/contactsSlice';
import filterReducer from './filters/filtersSlice';


export const store = configureStore({
    reducer: {
        auth: authSlice,
    contacts: contactsReducer,
    filters: filterReducer,
    },
    })