import {
  ResponsiveContainer,
  ScatterChart,
  Scatter as RScatter,
  Tooltip,
  XAxis,
  YAxis,
  Label,
} from "recharts";
import { ChartProps } from "../../types/components";

function Scatter(props: ChartProps) {
  const { data, dataMax, color, XLabel = "Value", YLabel = "M $" } = props;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart
        margin={{ top: 15, right: 30, left: 20, bottom: 20 }}
        width={1000}
        height={1000}
      >
        <XAxis
          type="category"
          dataKey="date"
          name="Date"
          tickFormatter={(name: string) => name.split("-")[0]}
        >
          <Label value={XLabel} offset={0} position="bottom" />
        </XAxis>
        <YAxis
          type="number"
          dataKey="value"
          name="Value"
          domain={[0, dataMax]}
          label={{ value: YLabel, angle: -90, position: "left" }}
        />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <RScatter data={data} name="value" fill={color} />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

export default Scatter;
