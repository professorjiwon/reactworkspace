import { configureStore, createSlice } from '@reduxjs/toolkit';

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
        ageUpdate(state) {
            state.age += 1
        }
    }
})
export let {changeName, ageUpdate} = user.actions



let stock = createSlice({
    name : 'stock',
    initialState : [7, 15, 8]
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id:1, name:'vest',  count:2},
        {id:3, name:'jacket',  count:1}
    ]
})

export default configureStore({
    reducer: {
        // 2. 1번에 만든 createSlice를 등록
        //     내맘대로 : user.reducer
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})