import {
  LineChart,
  Line as RLine,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import { ChartProps } from "../../types/components";

function Line(props: ChartProps) {
  const { data, dataMax, color, XLabel = "Value", YLabel = "M $" } = props;

  return (
    <ResponsiveContainer width="100%" height="100%" id="line-chart">
      <LineChart
        data={data}
        margin={{ top: 15, right: 30, left: 20, bottom: 20 }}
        width={1000}
        height={1000}
      >
        <RLine type="monotone" dataKey="value" stroke={color} dot={false} />
        <XAxis
          dataKey="date"
          name="Date"
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
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Line;
