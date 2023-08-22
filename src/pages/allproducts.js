import React,{useState, useContext} from 'react'

import { AppContext } from '../App';


export const Contacts = () =>{
  const[contacts, setContacts] = useState("Myron");

  const{setCategory} = useContext(AppContext);

    return (
        <div className="Products">
          <h1>For further info, Contact us here!</h1> 
          <button onClick={() => setCategory(contacts)}></button>
        </div>
    )
};