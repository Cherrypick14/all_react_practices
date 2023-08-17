import React,{useState, useEffect}from 'react'
import Axios from 'axios'

const Myage = () => {

  const[name, setName] = useState("");
  const[data, setData] = useState(null);

  const fetchData = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      setData(res.data);
    
  });
  }
 
  return (
    <div className='Age'>
      <input placeholder='Exmp .. Colucci'
             onChange={(event)=> setName(event.target.value)}/>

        <button onClick={fetchData}>Predict Age</button>

        <h1> Name is:{data?.name} </h1>
        <h1> Age is:{data?.age} </h1>
        <h1> Count is:{data?.count} </h1>
        
    </div>
  )
}

export default Myage;