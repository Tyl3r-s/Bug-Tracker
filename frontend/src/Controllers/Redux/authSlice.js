import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: "auth", 
    initialState: {
        admin: false,
        LoggedIn: false,
    },
    reducers: {
        signIn: (state, action) => {
            const {name, password} = action.payload;
            state.LoggedIn = true;
            state.admin = false;
        },
        signOut: (state) => {
            state.LoggedIn = false;
            state.admin = false;
        },
        createUser: (state, action) => {

        }
    }
})

export default slice.reducer;

export const {signIn, signOut, createUser} = slice.actions