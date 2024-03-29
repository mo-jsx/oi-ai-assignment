import { Chart } from "../types/components";
import { getID } from "./getID";

export const createChart = () => {
  const newChart: Chart = {
    id: getID(),
    title: "Title",
    type: "bar",
    color: "#FF0000",
    XLabel: "Year",
    YLabel: "Value in M $",
    grid: false,
    style: "solid",
  };

  return newChart;
};
