import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Contacts } from "./pages/Contacts";

function App() {

  const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contacts" element={<Contacts />} />
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
