import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface IinitialState {
  charts: number[];
}

const initialState: IinitialState = {
  charts: [],
};

export const chartSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {
    addChart: (state, action: PayloadAction<number>) => {
      state.charts = [...state.charts, action.payload];
    },
    removeChart: (state, action: PayloadAction<number>) => {
      const found = state.charts.find((id: number) => id == action.payload);
      state.charts = state.charts.filter((id) => id !== found);
    },
  },
});

export const { addChart, removeChart } = chartSlice.actions;

export const selectChart = (state: RootState) => state.charts;

export default chartSlice.reducer;
