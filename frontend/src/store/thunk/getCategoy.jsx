import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCategory } from "../../services/api";

// Create an async thunk for fetching products by category
export const fetchprodbycategory = createAsyncThunk('products/fetchproductbycategory',
  async (category, thunkAPI) => {
    try {
      // Use query parameter for category
      const response = await apiCategory.get('/', {
        params: { category } // Ensure the backend supports this query
      });
      return response.data; // Return the data on success
    } 
    catch (error) {
      console.error('Error fetching products by category:', error);
      return thunkAPI.rejectWithValue(error.response ? error.response.data : error.message);
    }
    
  }
);

export default fetchprodbycategory;