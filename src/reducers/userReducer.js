import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name:'',
    level:'', // beginner, intermediate, advanced
    workoutDays:[], //0-6 (semana começa no domingo)
    myWorkouts:[],
    lastWorkout:'', //ID
    dailyProgress:['2019-09-13', '2019-09-12']
};

//Clone do array myWorkouts
//let myWorkouts = [...initialState.myWorkouts];

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
        },
        ADD_WORKOUT: (state = initialState, action) => {
            if(state.myWorkouts.findIndex(i => i.id == action.payload.myWorkouts.id) < 0){
                state.myWorkouts.push(action.payload.myWorkouts);
            }
        },
        DEL_WORKOUT: (state = initialState, action) => {
            state.myWorkouts = state.myWorkouts.filter(i => i.id != action.payload.myWorkouts.id);
        }
    }
});

export const { SET_NAME, SET_WORKOUTDAYS, SET_LEVEL, ADD_WORKOUT, DEL_WORKOUT } = userSlice.actions
export default userSlice.reducer