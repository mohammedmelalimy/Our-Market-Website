import { createSlice } from "@reduxjs/toolkit";

const Wishlist = createSlice({
    name: 'wishList',
    initialState: [],
    reducers: {
        addToWishlist: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            
            if (!existingItem) {
                state.push({...action.payload});
            }
        },
        removeFromWishlist: (state, action) => {
            state.splice(state.findIndex(item => item.id === action.payload.id), 1);
        },
        clear: (state, action) => {
            return [];
        },
    }
});

export const { addToWishlist, removeFromWishlist,clear } = Wishlist.actions;
export default Wishlist.reducer ; 