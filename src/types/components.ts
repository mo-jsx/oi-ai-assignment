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
  displayGrid?: boolean;
}

export interface PlotProps {
  chartType: string;
  color: string;
  title?: string;
  style?: string;
  label?: Label;
  displayGrid?: boolean;
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
  isTicked: boolean;
  setIsTicked: Dispatch<SetStateAction<boolean>>;
}

export interface ColorPickerProps {
  label: string;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}

export interface CheckboxProps {
  label: string;
  isTicked: boolean;
  setIsTicked: Dispatch<SetStateAction<boolean>>;
}
