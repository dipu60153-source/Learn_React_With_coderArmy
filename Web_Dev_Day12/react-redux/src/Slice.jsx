import { createSlice } from "@reduxjs/toolkit";
// import { Increment } from "./../../../Web_Dev_Day10/state-listting/src/Increment";
// import sliceReducer from "./"

const reactslice = createSlice({
  name: 'slice1',
  initialState: { count: 0 },
  reducers: {
    Increment: (state) => {
      state.count = state.count + 1;
    },
    Decrement: (state) => {
      state.count = state.count - 1;
    },
    Reset: (state) => {
      state.count = 0;
    },
  },
});
export const {Increment, Decrement, Reset}=reactslice.actions;
export default reactslice.reducer;