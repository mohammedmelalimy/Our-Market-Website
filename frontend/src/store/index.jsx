import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './Slices/products/ProductSlice'
import CartSlice from './Slices/cart/CartSlice'
import WishSlice from './Slices/Wishlist/WishSlice'
import SpecificSlice from './Slices/Specific/SpecificSlice'

export const store = configureStore({
  reducer: {
    products:ProductSlice,
    cart:CartSlice,
    wishlist :WishSlice, 
    specific:SpecificSlice,
  },
})
export default store ;