import React from "react";
import Button, { ButtonComponentColor } from "./Button/Button";

function App() {
  return (
    <div className="App">
      <Button
        variant="contained"
        buttonColorType={ButtonComponentColor.SECONDARY}
      >
        dd
      </Button>
    </div>
  );
}

export default App;
