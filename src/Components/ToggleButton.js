import React, { useState } from "react";

const ToggleButton = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const toggleLight = () => {
    setIsLightOn(!isLightOn);
  };
  return (
    <div style={{ backgroundColor: isLightOn ? "blue" : "grey" }}>
      {isLightOn ? (
        <span style={{ backgroundColor: "red" }}> Light is off </span>
      ) : (
        <span style={{ backgroundColor: "green" }}> Light is on </span>
      )}
      <div style={{ margin: "10px" }}>
        <button onClick={toggleLight}>
          {isLightOn ? "Toggle on" : "Toggle off"}
        </button>
      </div>
    </div>
  );
};

export default ToggleButton;
