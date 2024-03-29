import { CheckboxProps } from "../../types/components";

function Checkbox(props: CheckboxProps) {
  const { label, isTicked, setIsTicked } = props;

  return (
    <div>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        checked={isTicked}
        onChange={() => setIsTicked(!isTicked)}
      />
      <label htmlFor="checkbox" className="font-bold ml-1">
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
