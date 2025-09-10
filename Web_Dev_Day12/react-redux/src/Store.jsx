import { configureStore } from "@reduxjs/toolkit";
// import sliceReducer from "./Slice"
import sliceReducer from "./Slice"

const stores = configureStore({
    reducer:{
        slice1:sliceReducer,
        // slice2: slice2Reducer
    }
})

export default stores;