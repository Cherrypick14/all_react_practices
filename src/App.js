import React from "react";
import Planets from "./components/planets";
import Counter from "./components/counter";
import Textchanger from "./components/textchanger";
import Colortext from "./components/colortext";

function App() {
  return (
    <div className="App">
      <>
      <Planets />
      <Counter />
      <Textchanger />
      <Colortext />
      </>
    </div>
  );
}

export default App;
