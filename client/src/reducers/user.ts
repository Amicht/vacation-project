import {createSlice} from '@reduxjs/toolkit';
import UserI from '../interface/UserI';

const initialUserValue:UserI = {
    id: 0,
    name: "",
    last_name: "",
    username: "",
    role: 0
}
export const userSlice = createSlice({
    name: "user",
    initialState: {value:initialUserValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state) => {
            state.value = initialUserValue;
        }
    }
});

export const loginReducer = userSlice.actions.login;
export const logoutReducer = userSlice.actions.logout;

export default userSlice.reducer;
