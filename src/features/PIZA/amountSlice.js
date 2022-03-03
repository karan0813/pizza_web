import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  // totalamount: 0,
  status: 'idle',
};
export const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    setamount: (state , action) => {
     state.value.push(action.payload) ;
    },
    // settotalamount: (state ,action) => {
    //   state.totalamount = action.payload;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  
});

export const { setamount  } = amountSlice.actions;
export const selectamount = (state) => state.amount.value;
// export const selecttotalamount = (state) => state.amount.totalamount;

export default amountSlice.reducer;
