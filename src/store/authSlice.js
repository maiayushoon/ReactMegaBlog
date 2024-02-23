import { createSlice } from '@reduxjs/toolkit'
//we ask to the store!! is user is authenticated (initialState)
const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: { //action gives payload
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;   //.userData
        },
        logout: (state, action) => {
            state.status = false;
            state.userData = null;
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;