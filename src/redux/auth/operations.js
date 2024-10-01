import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global/';

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
};

const cleareAuthHeader = () => {
    axios.defaults.headers.common.Authorization = ''
};

export const register = createAsyncThunk("auth/register", async (creadentials, thunkApi) => {
    try {
        const { data } = await axios.post("users/signup", creadentials)
        setAuthHeader(data.token)
        return data;
    } catch (error) {
        thunkApi.rejectWithValue(error.message);
    }
});

export const login = createAsyncThunk("auth/login", async (creadentials, thunkApi) => {
    try {
        const { data } = await axios.post('users/login', creadentials)
        setAuthHeader(data.token)
        
        return data;
        
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk("auth/logout", async(_, thunkApi) => {
    try {
        await axios.post('/users/logout')
        cleareAuthHeader();
    } catch (error) {
        thunkApi.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk("auth/refreshUser", async(_, thunkApi) => {
const state = thunkApi.getState();
const persistToken = state.auth.token;
setAuthHeader(persistToken)

const { data } = await axios.get('users/current');
return data;
},
{
    condition: (_, thunkApi) => {
        const state = thunkApi.getState();
        const persistToken = state.auth.token;
        
        return persistToken !== null;
    }
});