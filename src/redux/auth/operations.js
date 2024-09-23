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
        const { data } = axios.post('users/signup', creadentials)
        setAuthHeader(data)
        return data;
    } catch (error) {
        thunkApi.rejectWithValue(error.message);
    }
});

export const login = createAsyncThunk("auth/login", async (creadentials, thunkApi) => {});

export const logout = createAsyncThunk("auth/logout", async(creadentials, thunkApi) => {
    try {
        cleareAuthHeader();
    } catch (error) {
        thunkApi.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk("auth/refreshUser", async(creadentials, thunkApi) => {});