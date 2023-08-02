import React from "react";
import Planets from "./components/planets";
import Counter from "./components/counter";
import Textchanger from "./components/textchanger";
import Colortext from "./components/colortext";
import Newcounter from "./components/newcounter";

function App() {
  return (
    <div className="App">
      <>
      <Planets />
      <Counter />
      <Textchanger />
      <Colortext />
      <Newcounter />
      </>
    </div>
  );
}

export default App;
