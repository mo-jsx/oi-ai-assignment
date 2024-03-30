import { ChartObj } from "../types/components";
import { getID } from "./getID";

export const createChart = () => {
  const newChart: ChartObj = {
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
