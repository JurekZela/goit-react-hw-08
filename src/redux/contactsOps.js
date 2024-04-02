import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://66045d752ca9478ea17ddee5.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', 
async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const addContacts = createAsyncThunk('contact/addContact', 
async ({ id, name, number }, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', { id, name, number })
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContact = createAsyncThunk('contact/deleteContact',
async (contactId, thunkAPI) => {
    try {
        
        const response = await axios.delete(`contacts/${contactId}`);
        return response.data;

    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});