import React from "react";

const Livingroom = ({ isLightOn, handleChange }) => {
  return (
    <div>
      <h2>Living Room</h2>
      <p>The light is {isLightOn ? "off" : "on"}</p>
      <button onClick={handleChange}>Toggle Light</button>
    </div>
  );
};

export default Livingroom;
