import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from './slice/wishlist'
import cartSlice from './slice/cart'
const store=configureStore({
    reducer:{
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice
    }
})
export default store

