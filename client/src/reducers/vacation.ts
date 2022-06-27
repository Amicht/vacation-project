import {createSlice} from '@reduxjs/toolkit';
import VacationI from '../interface/vacationI';

const initialAvacationValue:VacationI[] = [];

export const vacationSlice = createSlice({
    name: "vacations",
    initialState: {value:initialAvacationValue },
    reducers: {
        setVacations: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const setVacationsReducer = vacationSlice.actions.setVacations;

export default vacationSlice.reducer;
