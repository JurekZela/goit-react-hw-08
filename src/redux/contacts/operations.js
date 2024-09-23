import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchContacts = createAsyncThunk("contacts/fetchAll",  
    async(_, thunkAPI) => {
        try {
            const { data } = await axios.get('contacts');
            return data;
            
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
});

export const addContact = createAsyncThunk("contacts/addContact", 
    async (newContact, thunkAPI) => {
        try {
            const { data } = await axios.post('contacts', { ...newContact })
            
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

    export const deleteContact = createAsyncThunk("contacts/deleteContact", 
        async(deleteId, thunkAPI) => {
            try {
                const { data } = await axios.delete(`contacts/${deleteId}`);
                return data;
            } catch (error) {
                return thunkAPI.rejectWithValue(error.message);
            }
        });