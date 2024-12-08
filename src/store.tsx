import { configureStore } from "@reduxjs/toolkit";
import myDataReducer from "./slices/weatherData";
import cityReducer from "./slices/cityName";

export const myStore = configureStore({
    reducer:{
        data : myDataReducer,
        myCity : cityReducer,
    }
});