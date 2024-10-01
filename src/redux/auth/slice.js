import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const initialState = {
     user: {
      name: null,
      email: null,
     },
     token: null,
     isLoggedIn: false,
     isRefreshing: false,
    }

    const fullfilledUser = (state, action) => {
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
    }
    

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(register.fulfilled, fullfilledUser)
        .addCase(login.fulfilled, fullfilledUser)
        .addCase(logout.fulfilled, () => {
            return initialState;
        })
        .addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isRefreshing = false;
            state.isLoggedIn = true;
        })
        .addCase(refreshUser.rejected, (state) => {
            state.isRefreshing = false;
        })
    },
    })

    export default authSlice.reducer;