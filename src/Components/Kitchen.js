import React from "react";

const Kitchen = ({ isLightOn, handleChange }) => {
  return (
    <div>
      <h2>Kitchen</h2>
      <p>Light is {isLightOn ? "off" : "on"}</p>
      <button onClick={handleChange}>Toggle Button</button>
    </div>
  );
};

export default Kitchen;
