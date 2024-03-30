import { Bar } from ".";
import { render } from "../../utils/test-utils";

describe("Bar Chart", () => {
  const data = {
    realtime_start: "2013-08-14",
    realtime_end: "2013-08-14",
    observation_start: "1776-07-04",
    observation_end: "9999-12-31",
    units: "lin",
    output_type: 1,
    file_type: "json",
    order_by: "observation_date",
    sort_order: "asc",
    count: 84,
    offset: 0,
    limit: 100000,
    observations: [
      {
        realtime_start: "2013-08-14",
        realtime_end: "2013-08-14",
        date: "1929-01-01",
        value: "1065.9",
      },
    ],
  };

  const dataMax = Math.max(...data.observations.map((o) => parseInt(o.value)));

  test("Bar is displayed", () => {
    vi.stubGlobal(
      "ResizeObserver",
      class MockResizeObserver {
        observe = vi.fn();
        unobserve = vi.fn();
        disconnect = vi.fn();
      }
    );

    const result = render(
      <Bar
        data={data.observations}
        dataMax={dataMax}
        color={"#FF0000"}
        id={0}
      />
    );

    const bar = result.container.querySelector("#bar-chart");

    expect(bar).toBeInTheDocument();
  });
});
