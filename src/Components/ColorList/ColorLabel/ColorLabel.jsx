import style from "./ColorLabel.module.scss";
import { useEffect, useRef } from "react";

const ColorLabel = ({ color, check, selectedColor, handleColorChange }) => {
  const colorRef = useRef(null);
  useEffect(() => {
    colorRef.current.style.setProperty("--data-color", color?.code);
  }, [color]);

  return (
    <label className={style.color} ref={colorRef}>
      <input
        type="radio"
        className={style.input}
        name="color"
        value={color?.title}
        checked={selectedColor ? selectedColor === color?.title : check}
        onChange={handleColorChange}
      />
      <span className={style.colorCheck}></span>
    </label>
  );
};

export default ColorLabel;
