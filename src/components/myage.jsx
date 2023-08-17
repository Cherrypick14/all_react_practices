import React,{useState, useEffect}from 'react'
import Axios from 'axios'

const Myage = () => {

  const[name, setName] = useState("");
  const[age, setPredictedAge] = useState(0);

  const fetchData = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setPredictedAge(res.data.age);
    
  });
  }
 
  return (
    <div className='Age'>
      <input placeholder='Exmp .. Colucci'
             onChange={(event)=> setName(event.target.value)}/>

        <button onClick={fetchData}>Predict Age</button>
        <h1>The predicted age is:{age} </h1>
        
    </div>
  )
}

export default Myage;