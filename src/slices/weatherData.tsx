import { createSlice } from "@reduxjs/toolkit";


const myData = createSlice({
    name: "APIData",
    initialState: {api:{},fiveDays:[]},
    reducers: {
        data:(state,action) => {
            state.api = action.payload.url;
        },
    }
})


export default myData.reducer

export const {data} = myData.actions
