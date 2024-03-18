import React from "react";
import { useColor } from "./colorContext";


const ColorSelector = () => {
  const { updateColor } = useColor();

  const handleChange = (e) => {
    updateColor(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
};

export default ColorSelector;

