import { ConfigureStore, createSlice } from '@reduxjs/toolkit';

// 1. createSlice를 만든다
let user = createSlice({
    name : 'user',
    initialState : 'kim'
})

export default ConfigureStore({
    reducer: {
        // 2. 1번에 만든 createSlice를 등록
        //     내맘대로 : user.reducer
        user : user.reducer
    }
})