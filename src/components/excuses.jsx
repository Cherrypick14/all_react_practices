import React,{useState, useEffect} from 'react'
import Axios from 'axios'

const Excuses = () => {

    const[excuses, setExcuses] =useState("");
    
   
    const fetchExcuse = async (type) =>{
         try {
            const response = await Axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}/`);
                // console.log(response.data[0].excuse);
                setExcuses(response.data[0].excuse);
        
         } catch (error) {
             console.error("There was an error catching the excuse");
         }
        
    }
  return (
    <div className='excuses'>
        <h2>Generate An Excuse Asap!!!</h2>

        <button onClick={()=>fetchExcuse("party")}>Party</button>
        <button onClick={()=>fetchExcuse("family")}>Family</button>
        <button onClick={()=>fetchExcuse("office")}>Office</button>

        <p>My excuse is : {excuses}</p>
    </div>
  )
}

export default Excuses;