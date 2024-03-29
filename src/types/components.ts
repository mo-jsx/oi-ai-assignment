import { FredSeriesObservation } from "./series";

export interface ChartProps {
  data: FredSeriesObservation[];
  dataMax: number;
  color: string;
  XLabel?: string;
  YLabel?: string;
  displayGrid?: boolean;
}

export interface Chart {
  id: number;
  title: string;
  type: string;
  color: string;
  grid?: boolean;
  XLabel?: string;
  YLabel?: string;
  style?: string;
}

export interface PlotProps {
  chart: Chart;
}

export interface SelectProps {
  id: number;
  label: string;
  selected: string;
  setSelected: Function;
  options: string[];
  defaultOption: string;
}

export interface ChartConfigProps {
  id: number;
  chartType: string;
  color: string;
  displayGrid: boolean;
}

export interface ColorPickerProps {
  id: number;
  label: string;
  color: string;
  setColor: (args: any) => any;
}

export interface CheckboxProps {
  id: number;
  label: string;
  isTicked: boolean;
  setIsTicked: (args: any) => any;
}
