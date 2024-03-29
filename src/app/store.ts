import { configureStore } from "@reduxjs/toolkit";
import chartSlice from "./slices/chartSlice";

const store = configureStore({
  reducer: {
    charts: chartSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
