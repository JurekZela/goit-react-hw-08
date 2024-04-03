import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filterContacts',
    initialState: {
		name: "",
	},
    reducers: {
        changeFilter: (state, action) => {  
            return action.payload;
        },
    },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;