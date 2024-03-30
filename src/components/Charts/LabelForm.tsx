import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  SetStateAction,
  useState,
} from "react";
import { useAppDispatch } from "../../app/reduxHooks";

function LabelForm({
  id,
  label,
  setIsDisplayed,
  updateLabel,
}: {
  id: number;
  label: "x" | "y";
  setIsDisplayed: Dispatch<SetStateAction<boolean>>;
  updateLabel: Function;
}) {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const enterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      if (label == "x") {
        dispatch(updateLabel({ id: id, newXLabel: title }));
        setIsDisplayed(false);
      } else {
        dispatch(updateLabel({ id: id, newYLabel: title }));
        setIsDisplayed(false);
      }
    }
  };

  const handleBlur = () => {
    if (label == "x") {
      dispatch(updateLabel({ id: id, newXLabel: title }));
      setIsDisplayed(false);
    } else {
      dispatch(updateLabel({ id: id, newYLabel: title }));
      setIsDisplayed(false);
    }
  };

  return (
    <div className="absolute -mt-5 z-50 w-full h-full backdrop-blur-sm bg-slate-100/80 grid place-content-center">
      <input
        type="text"
        value={title}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setTitle(e.target.value)
        }
        placeholder="Label..."
        className="border-2 border-black px-2 w-full"
        onBlur={() => handleBlur()}
        onKeyDown={enterHandler}
        autoFocus={true}
      />

      <p className="text-[12px] m-0 p-0 mt-1 text-blue-500">
        Press
        <span className="mx-1 px-[2px] border border-blue-500 text-white bg-blue-500 rounded-sm">
          Enter &crarr;
        </span>
        to update chart {label.toLocaleUpperCase()} Label
      </p>
    </div>
  );
}

export default LabelForm;
