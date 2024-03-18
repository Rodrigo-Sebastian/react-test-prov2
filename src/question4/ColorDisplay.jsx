import React from "react";
import { useColor } from "./colorContext";

const ColorDisplay = () => {
  const {selectedColor} = useColor();

  return(
    <>   
    <div
      style={{width: "60px", height: "20px", backgroundColor: selectedColor,}}
    ></div>
    
    </>
  );
};

export default ColorDisplay;
