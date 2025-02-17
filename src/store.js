// after slice we configre store

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice';
import cartReducer from './features/cart/cartSlice';

// now 1st steps for configureStore
const store = configureStore({
  // take reducer name from file userSlice
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;
