import React, { useState, createContext } from "react";
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Home } from "./pages/Home";
import { Categories } from "./pages/Categories";
import { Contacts } from "./pages/Contacts";
import { Navbar } from "./components/navbar";
import { Form } from "./pages/Form";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {MainToggle} from "./maintoggle"
// import {Products} from "./pages/allproducts"


// export const AppContext = createContext();

function App() {

  // const [showText, setShowText] = useState(false);
  const [category, setCategory]= useState("Cookies");

  const client = new QueryClient({
    defaultOptions:{
      queries :{
         refetchOnWindowFocus: false,
         
      }
    }
  });

  return (
    <div className="App">
      <QueryClientProvider client={client}>
      <Router>
       <Navbar />
        
        <Routes>
          <Route path="/" element={<Home category={category} />} />
          <Route path="/categories" element={<Categories category={category} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
          <Route path="/form" element={<Form />}/>
        </Routes>
      <MainToggle />     
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
      </QueryClientProvider>
      
    </div>
  );
}

export default App;
