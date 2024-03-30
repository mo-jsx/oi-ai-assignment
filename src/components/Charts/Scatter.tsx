import {
  ResponsiveContainer,
  ScatterChart,
  Scatter as RScatter,
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

function Scatter(props: ChartProps) {
  const {
    id,
    data,
    dataMax,
    color,
    XLabel = "Value",
    YLabel = "M $",
    displayGrid,
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
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{ top: 15, right: 30, left: 20, bottom: 30 }}
          width={1000}
          height={1000}
        >
          {displayGrid && <CartesianGrid />}
          <XAxis
            type="category"
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
            type="number"
            dataKey="value"
            name="Value"
            domain={[0, dataMax]}
            label={{ value: YLabel, angle: -90, position: "left" }}
            onClick={() => setIsYLabelDisplayed(true)}
          />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <RScatter data={data} name="value" fill={color} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Scatter;
