import { createSlice } from '@reduxjs/toolkit';

/*
// 1. createSlice를 만든다
let user = createSlice({
    name : 'user',
    initialState : 'kim',
    reducers : {
        changeName(state) {
            return 'jiwon ' + state
        }
    }
})
export let {changeName} = user.actions
*/

/*
// 객체일 때(array일 때)
let user = createSlice({
    name : 'user',
    initialState : {name:'kim', age: 23},
    reducers : {
        changeName(state) {
            return {name:'park', age: 25}
        }
    }
})
export let {changeName} = user.actions
*/

// 직접 변경 가능
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