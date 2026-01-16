import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';
export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, thunkAPI) => {
      try {
        const response = await api.get('/');
        return response.data;
      } 
      catch (error) {
        return thunkAPI.rejectWithValue(error.response ? error.response.data : error.message);
      }
    }
  );
