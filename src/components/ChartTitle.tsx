import { useState, ChangeEvent } from "react";
import { useAppDispatch } from "../app/reduxHooks";
import { removeChart, updateChartTitle } from "../app/slices/chartSlice";

function Message() {
  return (
    <p className="text-[12px] m-0 p-0 mt-1 text-blue-500">
      Press
      <span className="mx-1 px-[2px] border border-blue-500 text-white bg-blue-500 rounded-sm">
        Enter &crarr;
      </span>
      to update chart title
    </p>
  );
}

function ChartTitle({ id, title }: { id: number; title: string }) {
  const [iTitle, setITitle] = useState(title);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const dispatch = useAppDispatch();

  const enterHandler = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      dispatch(updateChartTitle({ id: id, title: iTitle }));
      setIsInputVisible(false);
    }
  };

  const handleBlur = () => {
    dispatch(updateChartTitle({ id: id, title: iTitle }));
    setIsInputVisible(false);
  };

  return (
    <div>
      {isInputVisible && (
        <>
          <input
            type="text"
            value={iTitle}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setITitle(e.target.value)
            }
            placeholder="Chart..."
            className="border-2 border-black px-2 w-full"
            onBlur={() => handleBlur()}
            onKeyDown={enterHandler}
            autoFocus={true}
          />
          <Message />
        </>
      )}
      {!isInputVisible && (
        <div className="flex flex-row justify-between">
          <h2
            className="text-2xl font-bold text-center pb-2 hover:cursor-pointer"
            onClick={() => setIsInputVisible(true)}
            title="Click to update title"
          >
            {title}
          </h2>
          <div>
            <h2
              onClick={() => setIsInputVisible(true)}
              role="button"
              className="text-[12px] hover:cursor-pointer hover:text-blue-500 hover:underline"
            >
              Edit
            </h2>
            <h2
              role="button"
              className="text-[12px] hover:cursor-pointer hover:text-blue-500 hover:underline"
              onClick={() => dispatch(removeChart(id))}
            >
              Delete
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChartTitle;
