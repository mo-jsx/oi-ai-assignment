import {
  updateChartColor,
  updateChartGrid,
  updateChartType,
  updateInterval,
  updateStyle,
} from "../app/slices/chartSlice";
import { ChartConfigProps } from "../types/components";
import { Checkbox, ColorPicker, Select } from "./core";

const charts = ["Bar", "Line", "Scatter"];
const lineStyle = ["Solid", "Dashed", "Dotted"];
const barStyle = [""];
const scatterStyle = [""];

const intervals = [
  "preserveStart",
  "preserveEnd",
  "preserveStartEnd",
  "equidistantPreserveStart",
];

const getStyleList = (chart: string) => {
  if (chart == "Line") return lineStyle;
  if (chart == "Bar") return barStyle;
  return scatterStyle;
};

function ChartConfig(props: ChartConfigProps) {
  const { id, chartType, color, displayGrid, style } = props;

  return (
    <div className="flex flex-row justify-between flex-wrap">
      <Select
        id={id}
        label={"Type"}
        property={"newType"}
        selected={chartType}
        setSelected={updateChartType}
        options={charts}
        defaultOption={"Pick a chart"}
      />

      <Select
        id={id}
        label={"Style"}
        property={"newStyle"}
        selected={style}
        setSelected={updateStyle}
        options={getStyleList(chartType)}
        defaultOption={"Pick a style"}
      />

      <Select
        id={id}
        label={"Interval"}
        property={"newInterval"}
        selected={style}
        setSelected={updateInterval}
        options={intervals}
        defaultOption={"Pick an interval"}
      />

      <ColorPicker
        id={id}
        label={"Color"}
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
