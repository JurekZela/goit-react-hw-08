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
    async (creadentials, thunkAPI) => {
        try {
            const { data } = await axios.post('contacts', { ...creadentials })
            
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    });

    export const deleteContact = createAsyncThunk("contacts/deleteContact", 
        async(creadentials, thunkAPI) => {
            try {
                const { data } = await axios.delete(`contacts/${creadentials}`);
                return data;
            } catch (error) {
                return thunkAPI.rejectWithValue(error.message);
            }
        });

        export const editContact = createAsyncThunk("contacts/editContact", 
            async (creadentials, thunkAPI) => {
                try {
                    const { data } = await axios.patch(`/contacts/${creadentials}`)
                    return data;

                } catch (error) {
                    return thunkAPI.rejectWithValue(error.message)
                }
            }
        ) 