import { useState } from "react";
import "./App.css";
import CustomSwitch from "./CustomSwitch/CustomSwitch";

function App() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="app">
      <CustomSwitch
        onColor={"rgba(41, 241, 195, 1)"}
        offColor={"rgba(236, 100, 75, 1)"}
        isChecked={checked}
        handleSwitch={() => setChecked(!checked)}
      />
    </div>
  );
}

export default App;
