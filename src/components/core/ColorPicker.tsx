import { ChangeEvent } from "react";
import { ColorPickerProps } from "../../types/components";
import { debounce } from "../../utils/debounce";
import { useAppDispatch } from "../../app/reduxHooks";

function ColorPicker(props: ColorPickerProps) {
  const { id, label, color, setColor } = props;
  const dispatch = useAppDispatch();

  // Debounce color change
  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) =>
    debounce(dispatch(setColor({ id: id, newColor: e.target.value })), 100);

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
