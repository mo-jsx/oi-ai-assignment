import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Chart } from "../../types/components";

export interface IinitialState {
  charts: Chart[];
}

const initialState: IinitialState = {
  charts: [],
};

export const chartSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {
    // Append a new chart
    addChart: (state, action: PayloadAction<Chart>) => {
      state.charts = [...state.charts, action.payload];
    },

    // Delete an existing chart by ID
    removeChart: (state, action: PayloadAction<number>) => {
      const found = state.charts.find((chart) => chart.id == action.payload);
      if (found) {
        state.charts = state.charts.filter((chart) => chart.id !== found.id);
      } else {
        console.log(`Chart with ID ${action.payload} not found`);
      }
    },

    // Update Chart Title by ID
    updateChartTitle: (
      state,
      action: PayloadAction<{ id: number; title: string }>
    ) => {
      const index = state.charts.findIndex(
        (chart) => chart.id === action.payload.id
      );

      if (index !== -1) {
        state.charts[index].title = action.payload.title;
      } else {
        console.log(`Chart with ID ${action.payload.id} not found`);
      }
    },

    // Update Chart Type by ID
    updateChartType: (
      state,
      action: PayloadAction<{ id: number; newType: string }>
    ) => {
      const index = state.charts.findIndex(
        (chart) => chart.id === action.payload.id
      );
      if (index !== -1) {
        state.charts[index].type = action.payload.newType;
      } else {
        console.error(`Chart with ID ${action.payload.id} not found`);
      }
    },

    // Update Chart Color by ID
    updateChartColor: (
      state,
      action: PayloadAction<{ id: number; newColor: string }>
    ) => {
      const index = state.charts.findIndex(
        (chart) => chart.id === action.payload.id
      );
      if (index !== -1) {
        state.charts[index].color = action.payload.newColor;
      } else {
        console.error(`Chart with ID ${action.payload.id} not found`);
      }
    },

    // Update Chart Grid by ID
    updateChartGrid: (
      state,
      action: PayloadAction<{ id: number; newGrid: boolean | undefined }>
    ) => {
      const index = state.charts.findIndex(
        (chart) => chart.id === action.payload.id
      );
      if (index !== -1) {
        state.charts[index].grid = action.payload.newGrid;
      } else {
        console.error(`Chart with ID ${action.payload.id} not found`);
      }
    },

    // Update Chart XLabel by ID
    updateXLabel: (
      state,
      action: PayloadAction<{ id: number; newXLabel: string | undefined }>
    ) => {
      const index = state.charts.findIndex(
        (chart) => chart.id === action.payload.id
      );
      if (index !== -1) {
        state.charts[index].XLabel = action.payload.newXLabel;
      } else {
        console.error(`Chart with ID ${action.payload.id} not found`);
      }
    },

    // Update Chart YLabel by ID
    updateYLabel: (
      state,
      action: PayloadAction<{ id: number; newYLabel: string | undefined }>
    ) => {
      const index = state.charts.findIndex(
        (chart) => chart.id === action.payload.id
      );
      if (index !== -1) {
        state.charts[index].YLabel = action.payload.newYLabel;
      } else {
        console.error(`Chart with ID ${action.payload.id} not found`);
      }
    },

    // Update Chart Style by ID
    updateStyle: (
      state,
      action: PayloadAction<{ id: number; newStyle: string | undefined }>
    ) => {
      const index = state.charts.findIndex(
        (chart) => chart.id === action.payload.id
      );
      if (index !== -1) {
        state.charts[index].style = action.payload.newStyle;
      } else {
        console.error(`Chart with ID ${action.payload.id} not found`);
      }
    },

    updateInterval: (
      state,
      action: PayloadAction<{
        id: number;
        newInterval:
          | "preserveStart"
          | "preserveEnd"
          | "preserveStartEnd"
          | "equidistantPreserveStart"
          | undefined;
      }>
    ) => {
      const index = state.charts.findIndex(
        (chart) => chart.id === action.payload.id
      );
      if (index !== -1) {
        state.charts[index].interval = action.payload.newInterval;
      } else {
        console.error(`Chart with ID ${action.payload.id} not found`);
      }
    },
  },
});

export const {
  addChart,
  removeChart,
  updateChartTitle,
  updateChartType,
  updateChartColor,
  updateChartGrid,
  updateXLabel,
  updateYLabel,
  updateStyle,
  updateInterval,
} = chartSlice.actions;

export const selectChart = (state: RootState) => state.charts;

export default chartSlice.reducer;
