import { configureStore } from '@reduxjs/toolkit';
import trailerManagementReducer from './slices/trailerManagement/TrailerSlice';

export const store = configureStore({
  reducer: {
    trailerManagement: trailerManagementReducer,
    // Add other reducers here as needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
