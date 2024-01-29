import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loggedIn: false,
        userData: {}
    },
    reducers: {
        login: (state, action)=>{
            state.loggedIn = true
            state.userData = action.payload
        },
        logout: state => {
            state.loggedIn = false
            state.userData = {}
        }
    }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer