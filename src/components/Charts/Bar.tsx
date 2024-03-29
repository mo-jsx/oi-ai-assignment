import {
  Bar as RBar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Label,
  CartesianGrid,
} from "recharts";
import { ChartProps } from "../../types/components";

function Bar(props: ChartProps) {
  const {
    data,
    dataMax,
    color,
    XLabel = "Year",
    YLabel = "M $",
    displayGrid,
  } = props;

  return (
    <ResponsiveContainer width="100%" height="100%" id="bar-chart">
      <BarChart
        data={data}
        margin={{ top: 15, right: 30, left: 20, bottom: 20 }}
        width={1000}
        height={1000}
      >
        {displayGrid && <CartesianGrid />}
        <XAxis
          dataKey="date"
          tickFormatter={(name: string) => name.split("-")[0]}
        >
          <Label value={XLabel} offset={0} position="bottom" />
        </XAxis>
        <YAxis
          domain={[0, dataMax]}
          name="value"
          tickFormatter={(val: string) => val.toString().split(".")[0]}
          label={{ value: YLabel, angle: -90, position: "left" }}
        />
        <Tooltip />
        <RBar dataKey="value" name="Value" fill={color} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Bar;
