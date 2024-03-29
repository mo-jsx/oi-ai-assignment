import { Bar, Line, Scatter } from "./Charts";
import { PlotProps } from "../types/components";
import useFetchData from "../hooks/useFetchData";
import { API_KEY } from "../utils/constants";

function Plot(props: PlotProps) {
  const { chartType, color, label, displayGrid } = props;
  const type = chartType.toLowerCase();

  const { data, loading, error } = useFetchData(
    "series/observations",
    "GNPCA",
    API_KEY
  );

  if (loading)
    return (
      <div className="grid place-content-center h-full">
        <h1 className="text-xl">Data is coming..</h1>
      </div>
    );

  if (error)
    return (
      <div className="grid place-content-center h-full">
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
          data={observations}
          dataMax={dataMax}
          color={color}
          XLabel={label?.XLabel}
          YLabel={label?.YLabel}
          displayGrid={displayGrid}
        />
      );

    if (type == "line")
      return (
        <Line
          data={observations}
          dataMax={dataMax}
          color={color}
          XLabel={label?.XLabel}
          YLabel={label?.YLabel}
          displayGrid={displayGrid}
        />
      );

    if (type == "scatter")
      return (
        <Scatter
          data={observations}
          dataMax={dataMax}
          color={color}
          XLabel={label?.XLabel}
          YLabel={label?.YLabel}
          displayGrid={displayGrid}
        />
      );
  }
}

export default Plot;
