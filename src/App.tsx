import { useAppDispatch, useAppSelector } from "./app/reduxHooks";
import { addChart } from "./app/slices/chartSlice";
import ChartContainer from "./components/ChartContainer";
import { createChart } from "./utils/createChart";

function App() {
  const { charts } = useAppSelector((state) => state.charts);
  const dispatch = useAppDispatch();

  return (
    <div className="body">
      <main className="main">
        <div
          className="container container--empty"
          onClick={() => dispatch(addChart(createChart()))}
          data-cy="create-chart-container"
        >
          <h2 className="text-9xl container_text--empty">+</h2>
          <h2 className="text-3xl container_text--empty">Add a new chart</h2>
        </div>

        {[...charts]?.reverse().map((chart) => (
          <div className="container container--solid" key={chart.id}>
            <ChartContainer id={chart.id} />
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
