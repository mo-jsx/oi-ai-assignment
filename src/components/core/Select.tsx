import { FormEvent } from "react";
import { SelectProps } from "../../types/components";

function Select(props: SelectProps) {
  const { label, selected, setSelected, options, defaultOption } = props;

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
        onChange={(e: FormEvent<HTMLSelectElement>) =>
          setSelected(e.currentTarget.value)
        }
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
