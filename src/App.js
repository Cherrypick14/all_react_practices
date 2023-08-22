import React, { useState, useContext } from "react";
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Contacts } from "./pages/Contacts";
import { Navbar } from "./components/navbar";
// import {Products} from "./pages/allproducts"


function App() {

  // const [showText, setShowText] = useState(false);
  const [category, setCategory]= useState("Cookies");

  return (
    <div className="App">
      <Router>
       <Navbar />
        
        <Routes>
          <Route path="/" element={<Home category={category} />} />
          <Route path="/categories" element={<Categories category={category} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
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
