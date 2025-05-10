// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/features/api/apiSlice";
import userReducer from "@/redux/features/userSlice";
import tasksReducer from "@/redux/features/tasksSlice";
import uiReducer from "@/redux/features/uiSlice";

// 👇 rename from `store` to `makeStore` and export the function
export const makeStore = () =>
  configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer,
      user: userReducer,
      ui: uiReducer,
      tasks: tasksReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
