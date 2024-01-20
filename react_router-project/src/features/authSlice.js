import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        loggedIn: false,
        currUserInfo: {}
    },
    reducers: {
        login: (state,action) => {
            state.loggedIn = true
            state.currUserInfo = action.payload
        },
        logout: state => {
            state.loggedIn = false
            state.currUserInfo = {}
        }
    }
})

export const {login, logout} = authSlice.actions

export default authSlice.reducer