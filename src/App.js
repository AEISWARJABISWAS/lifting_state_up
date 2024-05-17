import React from "react";
import House from "./Components/House";
import ToggleButton from "./Components/ToggleButton";

const App = () => {
  return (
    <div>
      <h2>Toggle Button</h2>
      <ToggleButton />
      <hr />
      <h1>Lifting state up</h1>
      <House />
    </div>
  );
};

export default App;
