import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name:'',
    level:'', // beginner, intermediate, advanced
    workoutDays:[], //0-6 (semana começa no domingo)
    myWorkouts:[],
    lastWorkout:'', //ID
    dailyProgress:['2019-09-13', '2019-09-12']
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SET_NAME: (state = initialState, action) => {
            state.name = action.payload.name
        },
        SET_WORKOUTDAYS: (state = initialState, action) => {
            state.workoutDays = action.payload.workoutDays
        },
        SET_LEVEL: (state = initialState, action) => {
            state.level = action.payload.level
        }
    }
});

export const { SET_NAME, SET_WORKOUTDAYS, SET_LEVEL } = userSlice.actions
export default userSlice.reducer