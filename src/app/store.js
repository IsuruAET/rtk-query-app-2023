import { configureStore } from "@reduxjs/toolkit";
import { toDosApiSlice } from "../features/todos/toDosApiSlice";

export const store = configureStore({
  reducer: {
    [toDosApiSlice.reducerPath]: toDosApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(toDosApiSlice.middleware),
});
