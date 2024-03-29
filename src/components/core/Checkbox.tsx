import { useAppDispatch } from "../../app/reduxHooks";
import { CheckboxProps } from "../../types/components";

function Checkbox(props: CheckboxProps) {
  const { id, label, isTicked, setIsTicked } = props;
  const dispatch = useAppDispatch();

  return (
    <div>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={isTicked}
        onChange={() => dispatch(setIsTicked({ id: id, newGrid: !isTicked }))}
      />
      <label htmlFor="checkbox" className="font-bold ml-1">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
