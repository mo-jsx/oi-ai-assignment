import { Bar, Line, Scatter } from "./Charts";
import { PlotProps } from "../types/components";
import useFetchData from "../hooks/useFetchData";
import { API_CODE, API_ENDPOINT, API_KEY } from "../utils/constants";

function Plot(props: PlotProps) {
  const { chart } = props;

  const type = chart.type.toLowerCase();

  const { data, loading, error } = useFetchData(
    API_ENDPOINT,
    API_CODE,
    API_KEY
  );

  if (loading)
    return (
      <div className="container_plot_fallback">
        <h1 className="text-xl">Data is coming..</h1>
      </div>
    );

  if (error)
    return (
      <div className="container_plot_fallback">
        <h1 className="text-xl">An error has occured!</h1>
      </div>
    );

  if (data) {
    const { observations } = data;

    const dataMax = Math.max(
      ...data?.observations.map((o) => parseInt(o.value))
    );

    if (type == "bar")
      return (
        <Bar
          id={chart.id}
          data={observations}
          dataMax={dataMax}
          color={chart.color}
          XLabel={chart.XLabel}
          YLabel={chart.YLabel}
          displayGrid={chart.grid}
          style={chart.style}
          interval={chart.interval}
        />
      );

    if (type == "line")
      return (
        <Line
          id={chart.id}
          data={observations}
          dataMax={dataMax}
          color={chart.color}
          XLabel={chart.XLabel}
          YLabel={chart.YLabel}
          displayGrid={chart.grid}
          style={chart.style}
          interval={chart.interval}
        />
      );

    if (type == "scatter")
      return (
        <Scatter
          id={chart.id}
          data={observations}
          dataMax={dataMax}
          color={chart.color}
          XLabel={chart.XLabel}
          YLabel={chart.YLabel}
          displayGrid={chart.grid}
          style={chart.style}
          interval={chart.interval}
        />
      );
  }
}

export default Plot;
