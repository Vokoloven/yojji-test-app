import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { neoSlice } from './neoSlice';

const rootReducer = combineReducers({
    [neoSlice.name]: neoSlice.reducer,
});

export const store = configureStore({
    reducer: { rootReducer },
});
