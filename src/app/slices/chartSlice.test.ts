import reducer, { addChart, removeChart } from "./chartSlice";

interface IinitialState {
  charts: number[];
}

describe("Chart Slice", () => {
  test("should return the initial state", () => {
    expect(reducer(undefined, { type: "unknown" })).toEqual({ charts: [] });
  });

  test("should handle a chart being added to an empty list", () => {
    const prevState: IinitialState = { charts: [] };
    const newId = 1;

    expect(reducer(prevState, addChart(newId))).toEqual({ charts: [newId] });
  });

  test("should handle a chart being added to an existing list", () => {
    const id = 1;
    const prevState: IinitialState = { charts: [id] };
    const newId = 2;

    expect(reducer(prevState, addChart(newId))).toEqual({
      charts: [id, newId],
    });
  });

  test("should handle a chart being deleted", () => {
    const idToDelete = 3;
    const prevState: IinitialState = { charts: [1, 2, 3, 4] };

    expect(reducer(prevState, removeChart(idToDelete))).toEqual({
      charts: [1, 2, 4],
    });
  });
});
