import { Dispatch, SetStateAction } from "react";
import { FredSeriesObservation } from "./series";

type Label = {
  XLabel: string;
  YLabel: string;
};

export interface ChartProps {
  data: FredSeriesObservation[];
  dataMax: number;
  color: string;
  XLabel?: string;
  YLabel?: string;
}

export interface PlotProps {
  chartType: string;
  title?: string;
  color: string;
  style?: string;
  label?: Label;
}

export interface SelectProps {
  label: string;
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  options: string[];
  defaultOption: string;
}

export interface ChartConfigProps {
  selectedChart: string;
  setSelectedChart: Dispatch<SetStateAction<string>>;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}

export interface ColorPickerProps {
  label: string;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}
