import React,{useState,useEffect} from 'react'
import Axios from 'axios'

const Catfacts = () => {

    const [Catfact, setCatfact] = useState("");

    useEffect(()=>{

        fetchFact();
     
    },[])

    const fetchFact = () =>{

        Axios.get("https://catfact.ninja/fact").then((res)=>{
            setCatfact(res.data.fact);
     
        })
    }
  return (
    <div className='cats'>
        <button onClick={fetchFact}>Get me Random Cat Facts</button>
        <p>{Catfact}</p>
    </div>
  )
}

export default Catfacts;