import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name:'',
    level:'', // beginner, intermediate, advanced
    workoutDays:[], //1-0
    myWorkouts:[],
    lastWorkout:'', //ID
    dailyProgress:['2019-09-13', '2019-09-12']
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SET_NAME: (state, action) => {
            return {...state, name:action.payload.name};
        }
    }
});

export const { SET_NAME } = userSlice.actions
export default userSlice.reducer