import { useState } from "react";
import Plot from "./Plot";
import ChartConfig from "./ChartConfig";
import ChartTitle from "./ChartTitle";

function ChartContainer() {
  const [selectedChart, setSelectedChart] = useState("bar");

  return (
    <>
      <ChartTitle />

      <ChartConfig
        selectedChart={selectedChart}
        setSelectedChart={setSelectedChart}
      />

      <div className="h-[80%]">
        <Plot
          chartType={selectedChart}
          color={"#FF0000"}
          label={{ XLabel: "Value", YLabel: "M $" }}
        />
      </div>
    </>
  );
}

export default ChartContainer;
