import {
  LineChart,
  Line as RLine,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Label,
  CartesianGrid,
} from "recharts";
import { ChartProps } from "../../types/components";
import { useState } from "react";
import LabelForm from "./LabelForm";
import { updateXLabel, updateYLabel } from "../../app/slices/chartSlice";

function Line(props: ChartProps) {
  const {
    id,
    data,
    dataMax,
    color,
    XLabel = "Value",
    YLabel = "M $",
    displayGrid,
    style,
  } = props;
  const [isXLabelDisplayed, setIsXLabelDisplayed] = useState(false);
  const [isYLabelDisplayed, setIsYLabelDisplayed] = useState(false);

  return (
    <div className="relative h-full w-full">
      {isXLabelDisplayed && (
        <LabelForm
          id={id}
          label="x"
          setIsDisplayed={setIsXLabelDisplayed}
          updateLabel={updateXLabel}
        />
      )}
      {isYLabelDisplayed && (
        <LabelForm
          id={id}
          label="y"
          setIsDisplayed={setIsYLabelDisplayed}
          updateLabel={updateYLabel}
        />
      )}
      <ResponsiveContainer width="100%" height="100%" id="line-chart">
        <LineChart
          data={data}
          margin={{ top: 15, right: 30, left: 20, bottom: 30 }}
          width={1000}
          height={1000}
        >
          {displayGrid && <CartesianGrid />}
          <RLine
            type="monotone"
            dataKey="value"
            stroke={color}
            dot={style == "Dotted" ? true : false}
            strokeDasharray={style == "Dashed" ? "5 5" : ""}
          />
          <XAxis
            dataKey="date"
            name="Date"
            tickFormatter={(name: string) => name.split("-")[0]}
            onClick={() => setIsXLabelDisplayed(true)}
          >
            <Label
              value={XLabel}
              offset={0}
              position="bottom"
              onClick={() => setIsXLabelDisplayed(true)}
            />
          </XAxis>
          <YAxis
            domain={[0, dataMax]}
            name="value"
            tickFormatter={(val: string) => val.toString().split(".")[0]}
            label={{ value: YLabel, angle: -90, position: "left" }}
            onClick={() => setIsYLabelDisplayed(true)}
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Line;
