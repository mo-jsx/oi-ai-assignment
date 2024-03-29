import { ChartConfigProps } from "../types/components";
import { Select } from "./core";

const charts = ["Bar", "Line", "Scatter"];

function ChartConfig(props: ChartConfigProps) {
  const { selectedChart, setSelectedChart } = props;

  return (
    <div className="flex flex-row justify-center gap-2">
      <Select
        label={"Chart type"}
        selected={selectedChart}
        setSelected={setSelectedChart}
        options={charts}
        defaultOption={"Pick a chart"}
      />
    </div>
  );
}

export default ChartConfig;
