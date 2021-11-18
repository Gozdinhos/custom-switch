import { useState } from "react";
import "./App.css";
import CustomSwitch from "./CustomSwitch/CustomSwitch";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="app">
      <CustomSwitch
        onColor={"rgba(150, 54, 148, 1)"}
        offColor={"rgba(174, 168, 211, 1 )"}
        isChecked={checked}
        handleSwitch={() => setChecked(!checked)}
      />
    </div>
  );
}

export default App;


