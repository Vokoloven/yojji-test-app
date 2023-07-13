import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from './axiosInstance';

export const fetchNeo = createAsyncThunk(
    'neo/fetchNeoItem',
    async (date, thunkAPI) => {
        try {
            const response = await axiosInstance.get('feed', {
                params: {
                    start_date: date,
                    end_date: date,
                    api_key: import.meta.env.VITE_API_KEY,
                },
            });

            const { data } = response;

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
