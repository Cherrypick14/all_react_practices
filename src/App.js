import React,{useState} from "react";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
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
import { Home } from "./pages/Home";

function App() {

  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      {/* <Catfacts /> */}
      {/* <Excuses /> */}
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
      </Router>
    </div>
  );
}

export default App;
