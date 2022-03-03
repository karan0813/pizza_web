import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import amountReducer from "../features/PIZA/amountSlice";
import cartReducer from "../features/PIZA/cartslice";



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    amount: amountReducer,
    cart: cartReducer,


  },
});
