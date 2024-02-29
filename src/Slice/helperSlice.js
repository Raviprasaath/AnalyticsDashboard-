import { createSlice } from "@reduxjs/toolkit";

const helperSlice = createSlice({
    name: "helperSlice",
    initialState: {
        navbarToggler: false,
    }, 
    reducers: {
        toggleNavbar: (state,action) => {
            state.navbarToggler = action;
        }
    }
})

export const { toggleNavbar } = helperSlice.actions;
export default helperSlice.reducer;