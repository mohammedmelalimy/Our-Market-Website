import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../../thunk/getproduct";
import {fetchprodbycategory} from "../../thunk/getCategoy";


export const productSlice = createSlice({
  name: "products",
  initialState : {
    items: [],
  },
  reducers: {
    filterLess50: (state, action) => {
      // Filters products with a price less than or equal to 50
      state.items = action.payload.filter((product) => product.price <= 50);
    },
    
    filter50to100: (state, action) => {
      // Filters products with a price between 50 and 100 (inclusive)
      state.items = action.payload.filter((product) => product.price > 50 && product.price <= 100);
    },
    
    filter100to120: (state, action) => {
      // Filters products with a price between 100 and 120 (inclusive)
      state.items = action.payload.filter((product) => product.price > 100 && product.price <= 120);
    },
    
    filterHigher120: (state, action) => {
      // Filters products with a price greater than 120
      state.items = action.payload.filter((product) => product.price > 120);
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
    builder.addCase(fetchprodbycategory.fulfilled, (state, action) => {
        state.items = action.payload; 
      })
  }
});

export const { filterLess50, filter50to100, filter100to120, filterHigher120 } = productSlice.actions;

export default productSlice.reducer;
