import { FormEvent } from "react";
import { SelectProps } from "../../types/components";
import { useAppDispatch } from "../../app/reduxHooks";

function Select(props: SelectProps) {
  const { id, label, selected, setSelected, options, defaultOption } = props;

  const dispatch = useAppDispatch();

  return (
    <div>
      <label htmlFor={`chart-${selected}`} className="font-bold">
        {label}
      </label>
      <br />

      <select
        name={`chart-${selected}`}
        id={`chart-${selected}`}
        value={selected}
        onChange={(e: FormEvent<HTMLSelectElement>) => {
          dispatch(setSelected({ id: id, newType: e.currentTarget.value }));
        }}
      >
        <option value={""} disabled={true}>
          {defaultOption}
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
