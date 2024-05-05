import { createSlice } from "@reduxjs/toolkit";
import { register } from '../auth/operations';

const authSlice = createSlice({
name: 'authUser',
initialState: {
    user: {
     name: null,
     email: null,
    },
     token: null,
     isLoggedIn: false,
     isRefreshing: false,
    },
extraReducers: (builder) => {
builder
.addCase(register.fulfilled, (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
})
},
});

export const authReducer = authSlice.reducer;
export const { stateUser } = authSlice.actions;