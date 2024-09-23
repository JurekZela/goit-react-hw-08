import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
name: "filterContacts",
initialState: {
    name: "",
},

reducers: {
    changeFilter: (state, action) => {
  state.name = action.payload;
    }
}
})

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;

export const selectFilter = (state) => state.filters.name;