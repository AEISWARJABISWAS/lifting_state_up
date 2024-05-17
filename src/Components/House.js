import React, { useState } from "react";
import Kitchen from "./Kitchen";
import Livingroom from "./Livingroom";

const House = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const handleChange = () => {
    setIsLightOn(!isLightOn);
  };
  return (
    <div>
      {/* {isLightOn ? <p>Light is off</p> : <p>Light is on</p>}
      <button onClick={handleChange}>Toggle Button</button> */}
      <Kitchen isLightOn={isLightOn} handleChange={handleChange} />
      <hr />
      <Livingroom isLightOn={isLightOn} handleChange={handleChange} />
    </div>
  );
};

export default House;

/*The House component holds the state (isLightOn) and the function to toggle the light (toggleLight).
Both LivingRoom and Kitchen components receive isLightOn and toggleLight as props from the House component.
When you click the "Toggle Light" button in either the Living Room or the Kitchen, it triggers the toggleLight 
function in the House component, which updates the isLightOn state.
The use of lifting state up in this scenario is to avoid duplication of state and state-changing logic. 
Instead of each room having its own state for the light, we lift the state up to the common parent component, House, 
so both rooms can share the same state and functionality. This makes the code simpler and easier to maintain.*/
