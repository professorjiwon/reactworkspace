import { configureStore, createSlice } from '@reduxjs/toolkit';
import user from './userSlice'

let stock = createSlice({
    name : 'stock',
    initialState : [7, 15, 8]
})

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id:1, name:'vest',  count:2},
        {id:3, name:'jacket',  count:1},
    ],
    reducers : {
        countIncrease(state, action) {
            let i = state.findIndex(a => a.id == action.payload)
            state[i].count++
        },
        addItem(state, action) {
            state.push(action.payload)
        }

    }
})
export let { countIncrease, addItem } = cart.actions

export default configureStore({
    reducer: {
        // 2. 1번에 만든 createSlice를 등록
        //     내맘대로 : user.reducer
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})