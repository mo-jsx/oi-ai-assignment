import { useState } from "react";
import Plot from "./Plot";
import ChartConfig from "./ChartConfig";
import ChartTitle from "./ChartTitle";

function ChartContainer({ id }: { id: number }) {
  const [selectedChart, setSelectedChart] = useState("bar");
  const [color, setColor] = useState("#0000FF");

  return (
    <>
      <ChartTitle id={id} />

      <ChartConfig
        selectedChart={selectedChart}
        setSelectedChart={setSelectedChart}
        color={color}
        setColor={setColor}
      />

      <div className="h-[80%]">
        <Plot
          chartType={selectedChart}
          color={color}
          label={{ XLabel: "Value", YLabel: "M $" }}
        />
      </div>
    </>
  );
}

export default ChartContainer;
