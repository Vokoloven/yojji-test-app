import { createSlice } from '@reduxjs/toolkit';
import { fetchNeo } from '../service/getNeo.service';

const initialState = {
    data: {},
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    errorMessage: '',
};

export const neoSlice = createSlice({
    name: 'neo',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchNeo.pending, (state) => {
            state.loading = 'pending';
            state.errorMessage = '';
        });
        builder.addCase(fetchNeo.fulfilled, (state, { payload }) => {
            state.loading = 'succeeded';
            state.data = { ...payload };
        });
        builder.addCase(fetchNeo.rejected, (state, { payload }) => {
            state.loading = 'failed';
            state.errorMessage = payload.error_message;
        });
    },
});
