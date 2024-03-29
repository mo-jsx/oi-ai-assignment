import reducer, {
  IinitialState,
  addChart,
  removeChart,
  updateChartColor,
  updateChartGrid,
  updateChartTitle,
  updateChartType,
  updateStyle,
  updateXLabel,
  updateYLabel,
} from "./chartSlice";

describe("Chart Slice", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({ charts: [] });
  });

  test("should handle a chart being added to an empty list", () => {
    const prevState: IinitialState = { charts: [] };
    const newChart = {
      id: 1,
      title: "Title",
      type: "bar",
      color: "#FF0000",
    };

    expect(reducer(prevState, addChart(newChart))).toEqual({
      charts: [newChart],
    });
  });

  test("should handle a chart being added to an existing list", () => {
    const prevState: IinitialState = {
      charts: [
        {
          id: 1,
          title: "Title",
          type: "bar",
          color: "#FF0000",
        },
      ],
    };

    const newChart = {
      id: 2,
      title: "Title",
      type: "bar",
      color: "#FF0000",
    };

    expect(reducer(prevState, addChart(newChart))).toEqual({
      charts: [
        { id: 1, title: "Title", type: "bar", color: "#FF0000" },
        { id: 2, title: "Title", type: "bar", color: "#FF0000" },
      ],
    });
  });

  test("should handle a chart being deleted", () => {
    const chartIDToDelete = 3;
    const prevState: IinitialState = {
      charts: [
        { id: 1, title: "Title", type: "bar", color: "#FF0000" },
        { id: 2, title: "Title", type: "bar", color: "#FF0000" },
        { id: 3, title: "Title", type: "bar", color: "#FF0000" },
        { id: 4, title: "Title", type: "bar", color: "#FF0000" },
      ],
    };

    expect(reducer(prevState, removeChart(chartIDToDelete))).toEqual({
      charts: [
        { id: 1, title: "Title", type: "bar", color: "#FF0000" },
        { id: 2, title: "Title", type: "bar", color: "#FF0000" },
        { id: 4, title: "Title", type: "bar", color: "#FF0000" },
      ],
    });
  });

  test("should handle a chart title being updated", () => {
    const newChartTitle = {
      id: 1,
      title: "Title 1",
    };

    const prevState: IinitialState = {
      charts: [{ id: 1, title: "Title", type: "bar", color: "#FF0000" }],
    };

    expect(reducer(prevState, updateChartTitle(newChartTitle))).toEqual({
      charts: [
        { id: 1, title: newChartTitle.title, type: "bar", color: "#FF0000" },
      ],
    });
  });

  test("should handle a chart type being updated", () => {
    const newChartType = {
      id: 1,
      newType: "line",
    };

    const prevState: IinitialState = {
      charts: [{ id: 1, title: "Title", type: "bar", color: "#FF0000" }],
    };

    expect(reducer(prevState, updateChartType(newChartType))).toEqual({
      charts: [{ id: 1, title: "Title", type: "line", color: "#FF0000" }],
    });
  });

  test("should handle a chart color being updated", () => {
    const newChartColor = {
      id: 1,
      newColor: "#0000FF",
    };

    const prevState: IinitialState = {
      charts: [{ id: 1, title: "Title", type: "bar", color: "#FF0000" }],
    };

    expect(reducer(prevState, updateChartColor(newChartColor))).toEqual({
      charts: [{ id: 1, title: "Title", type: "bar", color: "#0000FF" }],
    });
  });

  test("should handle a chart grid being updated", () => {
    const newChartGrid = {
      id: 1,
      newGrid: true,
    };

    const prevState: IinitialState = {
      charts: [
        { id: 1, title: "Title", type: "bar", color: "#FF0000", grid: false },
      ],
    };

    expect(reducer(prevState, updateChartGrid(newChartGrid))).toEqual({
      charts: [
        { id: 1, title: "Title", type: "bar", color: "#FF0000", grid: true },
      ],
    });
  });

  test("should handle a chart X label being updated", () => {
    const newChartXLabel = {
      id: 1,
      newXLabel: "Year",
    };

    const prevState: IinitialState = {
      charts: [
        { id: 1, title: "Title", type: "bar", color: "#FF0000", XLabel: "" },
      ],
    };

    expect(reducer(prevState, updateXLabel(newChartXLabel))).toEqual({
      charts: [
        {
          id: 1,
          title: "Title",
          type: "bar",
          color: "#FF0000",
          XLabel: "Year",
        },
      ],
    });
  });

  test("should handle a chart Y label being updated", () => {
    const newChartYLabel = {
      id: 1,
      newYLabel: "Value",
    };

    const prevState: IinitialState = {
      charts: [
        { id: 1, title: "Title", type: "bar", color: "#FF0000", YLabel: "" },
      ],
    };

    expect(reducer(prevState, updateYLabel(newChartYLabel))).toEqual({
      charts: [
        {
          id: 1,
          title: "Title",
          type: "bar",
          color: "#FF0000",
          YLabel: "Value",
        },
      ],
    });
  });

  test("should handle a chart plot style being updated", () => {
    const newChartStyle = {
      id: 1,
      newStyle: "dashed",
    };

    const prevState: IinitialState = {
      charts: [
        { id: 1, title: "Title", type: "bar", color: "#FF0000", style: "" },
      ],
    };

    expect(reducer(prevState, updateStyle(newChartStyle))).toEqual({
      charts: [
        {
          id: 1,
          title: "Title",
          type: "bar",
          color: "#FF0000",
          style: "dashed",
        },
      ],
    });
  });
});
