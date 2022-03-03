import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
  status: 'idle',
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setcart: (state , action) => {
     state.value.push(action.payload) 
    },
    // settotalcart: (state ,action) => {
    //   state.totalcart = action.payload;
    // },
    // incrementBycart: (state, action) => {
    //   state.value += action.payload;
    // },
  },
  
});

export const { setcart  } = cartSlice.actions;
export const selectcart = (state) => state.cart.value;
// export const selecttotalcart = (state) => state.cart.totalcart;

export default cartSlice.reducer;
