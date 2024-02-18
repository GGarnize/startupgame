import { configureStore } from '@reduxjs/toolkit';
import empresaReducer from './slices/empresaSlice';

export const store = configureStore({
    reducer: {
        empresa: empresaReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
