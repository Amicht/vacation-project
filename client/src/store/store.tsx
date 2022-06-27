import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../reducers/user'
import vacationReducer from '../reducers/vacation'


export const store = configureStore({
    reducer: {
        user: userReducer,
        vacations: vacationReducer
    }
});