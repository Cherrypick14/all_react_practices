import React,{useState} from "react";
import Planets from "./components/planets";
import Counter from "./components/counter";
import Textchanger from "./components/textchanger";
import Colortext from "./components/colortext";
import Newcounter from "./components/newcounter";
import Rtxe from "./components/rtxe";
import Todolist from "./components/todolist";
import Mytext from "./components/mytext";
import Catfacts from "./components/catfacts";
import Myage from "./components/myage";
import Excuses from "./components/excuses";

function App() {

  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <>
      <Catfacts />
      <Excuses />
      {/* <Myage /> */}
      {/* <button onClick={()=> setShowText(!showText)}>Show Text</button>

     {showText && <Mytext /> }  */}
      {/* <Todolist /> */}
      {/* <Planets />
      <Counter />
      <Textchanger />
      <Colortext />
      <Newcounter />
      <Rtxe /> */}
      </>
    </div>
  );
}

export default App;
