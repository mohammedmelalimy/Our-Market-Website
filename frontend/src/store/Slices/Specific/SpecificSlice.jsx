import { createSlice } from "@reduxjs/toolkit";
import getSpecificproduct from '../../thunk/getSpecificproduct';

const Specific = createSlice({
    name: 'specificproduct',
    initialState: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSpecificproduct.fulfilled, (state, action) => {
                return {... action.payload};
            })
    }
});

export default Specific.reducer;
