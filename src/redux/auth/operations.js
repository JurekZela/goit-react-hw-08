import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66045d752ca9478ea17ddee5.mockapi.io/';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk(
    "auth/register",
    async (credentials, thunkAPI) => {
        try {
            const response = axios.post('users/signup', credentials);
            setAuthHeader(response.data.token);
            return response.data;

        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const logIn = createAsyncThunk(
    "auth/logIn",
    async (credentials, thunkAPI) => {
        try {
            const response = axios.post('users/login', credentials);
            setAuthHeader(response.data.token);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const logOut = createAsyncThunk(
    "auth/logOut",
    async (_, thunkAPI) => {
        try {
            await axios.post('/users/logOut');
            clearAuthHeader()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);