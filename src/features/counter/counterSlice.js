import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  status: 'idle',
};
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    Addcart: (state) => {
     state.value += 1;
    },
   
  },
  
});

export const { Addcart } = counterSlice.actions;
export const selectCount = (state) => state.counter.value;
export default counterSlice.reducer;
