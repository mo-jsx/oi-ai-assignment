import {
  updateChartColor,
  updateChartGrid,
  updateChartType,
} from "../app/slices/chartSlice";
import { ChartConfigProps } from "../types/components";
import { Checkbox, ColorPicker, Select } from "./core";

const charts = ["Bar", "Line", "Scatter"];

function ChartConfig(props: ChartConfigProps) {
  const { id, chartType, color, displayGrid } = props;

  return (
    <div className="flex flex-row justify-center gap-2">
      <Select
        id={id}
        label={"Chart type"}
        selected={chartType}
        setSelected={updateChartType}
        options={charts}
        defaultOption={"Pick a chart"}
      />

      <ColorPicker
        id={id}
        label={"Pick Color"}
        color={color}
        setColor={updateChartColor}
      />

      <Checkbox
        id={id}
        label={"Grid"}
        isTicked={displayGrid}
        setIsTicked={updateChartGrid}
      />
    </div>
  );
}

export default ChartConfig;
