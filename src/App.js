import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Contacts } from "./pages/Contacts";
import { Navbar } from "./components/navbar";
import {Products} from "./pages/allproducts"



const ParentComponent = () =>{
  const[state, setState] = useState();

  return (
    <>
      <ChildComponent state={state} />
    </>
 
  )
} 

const ChildComponent = (state)=>{
  return(
    <>
    <GrandChildComponent state={state} />
    </>
  )
}

const GrandChildComponent = (state) =>{
  return(
    <div>
     {state}
    </div>
  )
}

function App() {

  // const [showText, setShowText] = useState(false);

  return (
    <div className="App">
      {/* <Router> */}
       {/* <Navbar /> */}
        
        {/* <Routes>
          <Route path="/" element={<Home  />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes> */}
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
      {/* </Router> */}
    </div>
  );
}

export default App;
