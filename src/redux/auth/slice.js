import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from '../auth/operations';


const fullfilledUser = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
}


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
.addCase(register.fulfilled, fullfilledUser)
.addCase(logIn.fulfilled, fullfilledUser)
.addCase(logOut.fulfilled, (state, action) => {
    state.user = { name: null, email: null, };
    state.token = null;
    state.isLoggedIn = false;
})
.addCase(refreshUser.pending, (state) => {
    state.isRefreshing = true;
})
.addCase(refreshUser.fulfilled, (state, action) => {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
})
.addCase(refreshUser.rejected, (state) => {
    state.isRefreshing = false;
})
},
});

export const authReducer = authSlice.reducer;
export const { stateUser } = authSlice.actions;