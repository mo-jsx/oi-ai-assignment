import { FormEvent } from "react";
import { SelectProps } from "../../types/components";
import { useAppDispatch } from "../../app/reduxHooks";

function Select(props: SelectProps) {
  const { id, label, property, selected, setSelected, options, defaultOption } =
    props;

  const dispatch = useAppDispatch();

  const handleChange = (e: FormEvent<HTMLSelectElement>) => {
    if (property == "newType") {
      const newObj = { id: id, newType: e.currentTarget.value };
      dispatch(setSelected(newObj));
    }

    if (property == "newStyle") {
      const newObj = { id: id, newStyle: e.currentTarget.value };
      dispatch(setSelected(newObj));
    }

    if (property == "newInterval") {
      const newObj = { id: id, newInterval: e.currentTarget.value };
      dispatch(setSelected(newObj));
    }
  };

  return (
    <div>
      <label htmlFor={`chart-${selected}`} className="font-bold text-sm">
        {label}
      </label>
      <br />

      <select
        name={`chart-${selected}`}
        id={`chart-${selected}`}
        value={selected}
        onChange={handleChange}
        data-cy={`chart-select-${property}`}
      >
        <option value={""} disabled={true}>
          {defaultOption}
        </option>
        {options.map((option) => (
          <option value={option} key={option} title={option}>
            {option.length > 12 ? `${option.slice(0, 12)}..` : option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
