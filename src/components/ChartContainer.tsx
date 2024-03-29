import Plot from "./Plot";
import ChartConfig from "./ChartConfig";
import ChartTitle from "./ChartTitle";
import { useAppSelector } from "../app/reduxHooks";

function ChartContainer({ id }: { id: number }) {
  const chart = useAppSelector(
    (state) => state.charts.charts.find((chart) => chart.id == id)!
  );

  return (
    <>
      <ChartTitle id={chart.id} title={chart.title} />

      <ChartConfig
        id={chart.id}
        chartType={chart.type}
        color={chart.color}
        displayGrid={chart.grid!}
      />

      <div className="h-[80%]">
        <Plot chart={chart} />
      </div>
    </>
  );
}

export default ChartContainer;
