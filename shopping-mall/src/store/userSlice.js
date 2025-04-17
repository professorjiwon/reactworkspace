import { createSlice } from '@reduxjs/toolkit';

let user = createSlice({
    name : 'user',
    initialState : {name:'kim', age: 23},
    reducers : {
        changeName(state) {
            state.name = 'park'
        },
        ageUpdate(state, num) {
            state.age += num.payload
        }
    }
})
export let {changeName, ageUpdate} = user.actions
export default user