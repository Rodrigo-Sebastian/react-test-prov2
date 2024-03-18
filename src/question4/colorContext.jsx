import React, { createContext, useState, useContext } from "react";

const ColorContext = createContext();

export const useColor = () => useContext(ColorContext);

export const ColorProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const updateColor = (color) => {
    setSelectedColor(color);
  };

  const contextValue = {
    selectedColor,
    updateColor,
  };

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};
