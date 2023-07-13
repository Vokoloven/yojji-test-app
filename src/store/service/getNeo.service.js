import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from './axiosInstance';

export const fetchNeo = createAsyncThunk(
    'neo/fetchNeoItem',
    async (dates, thunkAPI) => {
        try {
            const response = await axiosInstance.get(
                `feed?start_date=${dates}&end_date=${dates}&api_key=${
                    import.meta.env.VITE_API_KEY
                }`
            );

            const { data } = response;

            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
