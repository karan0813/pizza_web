import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  topname :[],
  status: 'idle',
};
export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    setamount: (state , action) => {
     state.value.push(action.payload) ;
    },
    settopings: (state ,action) => {
      state.topname.push(action.payload);
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  
});

export const { setamount , settopings } = amountSlice.actions;
export const selectamount = (state) => state.amount.value;
export const selecttopings = (state) => state.amount.topname;

export default amountSlice.reducer;
