import { ChartConfigProps } from "../types/components";
import { Checkbox, ColorPicker, Select } from "./core";

const charts = ["Bar", "Line", "Scatter"];

function ChartConfig(props: ChartConfigProps) {
  const {
    selectedChart,
    setSelectedChart,
    color,
    setColor,
    isTicked,
    setIsTicked,
  } = props;

  return (
    <div className="flex flex-row justify-center gap-2">
      <Select
        label={"Chart type"}
        selected={selectedChart}
        setSelected={setSelectedChart}
        options={charts}
        defaultOption={"Pick a chart"}
      />

      <ColorPicker label={"Pick Color"} color={color} setColor={setColor} />

      <Checkbox label={"Grid"} isTicked={isTicked} setIsTicked={setIsTicked} />
    </div>
  );
}

export default ChartConfig;
