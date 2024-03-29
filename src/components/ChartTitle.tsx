import { useState, ChangeEvent } from "react";

function ChartTitle() {
  const [title, setTitle] = useState("Title");
  const [isInputVisible, setIsInputVisible] = useState(false);

  const enterHandler = (e: KeyboardEvent) => {
    if (e.key == "Enter") {
      setIsInputVisible(false);
    }
  };

  return (
    <div>
      {isInputVisible && (
        <input
          type="text"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          placeholder="Chart..."
          className="border-2 border-black px-2 w-full"
          onBlur={() => setIsInputVisible(false)}
          onKeyDown={enterHandler}
          autoFocus={true}
        />
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
