import { createSlice } from "@reduxjs/toolkit";

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
reducers: {
    stateUser: (state, action) => {
        return action.payload;
    },
},
});

export const authReducer = authSlice.reducer;
export const { stateUser } = authSlice.actions;