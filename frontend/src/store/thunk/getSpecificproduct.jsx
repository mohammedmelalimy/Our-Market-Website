import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiForSpecific } from '../../services/api';

const productbyid = createAsyncThunk(
  'specificproduct/productbyid',
  async (id, thunkAPI) => {
    try {
      // Use the ID parameter to fetch the specific product
      const response = await apiForSpecific.get(`/${id}`);
      return response.data;
    } catch (error) {
      // Handle error and reject with a meaningful value
      return thunkAPI.rejectWithValue(
        error.response ? error.response.data : error.message
      );
    }
  }
);

export default productbyid;
