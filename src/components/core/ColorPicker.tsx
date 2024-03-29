import { ChangeEvent } from "react";
import { ColorPickerProps } from "../../types/components";
import { debounce } from "../../utils/debounce";

function ColorPicker(props: ColorPickerProps) {
  const { label, color, setColor } = props;

  // Debounce color change
  const debouncedSetColor = debounce(setColor, 100);

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) =>
    debouncedSetColor(e.target.value);

  return (
    <div>
      <label htmlFor="color" className="font-bold">
        {label}
      </label>
      <br />
      <input
        type="color"
        name="color"
        id="color"
        value={color}
        onChange={handleColorChange}
      />
    </div>
  );
}

export default ColorPicker;
