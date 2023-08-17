import React,{useState, useEffect}from 'react'
import Axios from 'axios'

const Myage = () => {

  const[name, setName] = useState("")

  const fetchData = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res)=>{
      console.log(res.data)
  })
  }
 
  return (
    <div className='Age'>
      <input placeholder='Exmp .. Cheryl'
             onChange={(event)=> setName(event.target.value)}/>

        <button onClick={fetchData}>Predict Age</button>
        <h1>The predicted age is: </h1>
        
    </div>
  )
}

export default Myage;