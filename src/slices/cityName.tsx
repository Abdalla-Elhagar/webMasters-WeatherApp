import { createSlice } from "@reduxjs/toolkit";


const city = createSlice({
    name: "cityName",
    initialState: {cityName:""},
    reducers: {
        cityName:(state,action) => {
            state.cityName = action.payload.city;
        },
    }
})


export default city.reducer

export const {cityName} = city.actions
