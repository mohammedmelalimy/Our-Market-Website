import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name:'cart',
    initialState: [],
    reducers: {
        addtocart: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 }); 
        }
        },
        deletefromcart:(state,action)=>{
            return state.filter(item=>item.id!==action.payload.id)
        },
        deleteall:()=>{
            return [];
        },
        increaseQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            if (item) {
              item.quantity += 1;
            }
        },
        decreaseQuantity: (state, action) => {
        const item = state.find((item) => item.id === action.payload);
        if (item && item.quantity > 0) {
            item.quantity -= 1;
        }
        },
    },
    extraReducers:()=>{}
})

export const {addtocart,deletefromcart,deleteall,increaseQuantity,decreaseQuantity} =  cart.actions;
export default cart.reducer;