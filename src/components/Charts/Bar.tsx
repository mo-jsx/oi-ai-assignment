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
import { useState } from "react";
import LabelForm from "./LabelForm";
import { updateXLabel, updateYLabel } from "../../app/slices/chartSlice";

function Bar(props: ChartProps) {
  const {
    data,
    dataMax,
    color,
    XLabel = "Year",
    YLabel = "M $",
    displayGrid,
    interval,
    id,
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
      <ResponsiveContainer width="100%" height="100%" id="bar-chart">
        <BarChart
          data={data}
          margin={{ top: 15, right: 30, left: 20, bottom: 30 }}
          width={1000}
          height={1000}
        >
          {displayGrid && <CartesianGrid />}
          <XAxis
            dataKey="date"
            tickFormatter={(name: string) => name.split("-")[0]}
            interval={interval}
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
          <Tooltip />
          <RBar dataKey="value" name="Value" fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Bar;
