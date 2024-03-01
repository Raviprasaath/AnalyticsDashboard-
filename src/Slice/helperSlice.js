import { createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../constant";

let url = BASE_URL;

const helperSlice = createSlice({
    name: "helperSlice",
    initialState: {
        navbarToggler: false,
        filteredItems: ["currentYear"],
    }, 
    reducers: {
        toggleNavbar: (state,action) => {
            state.navbarToggler = action;
        },
        filterSelections: (state, action) => {
            state.filteredItems = (action.payload);
        },
    }
})

export const { toggleNavbar, filterSelections } = helperSlice.actions;
export default helperSlice.reducer;