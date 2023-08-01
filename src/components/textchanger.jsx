import React,{useState} from 'react'

const Textchanger = () => {

    const[changeText,setChangeText] = useState("");

    const handleChange = (e)=>{
        setChangeText(e.target.value) 
        console.log(e);
    }

  return (
   
    <div>
        {changeText}
        <input type="text" onChange={handleChange} />
    </div>
  )
}

export default Textchanger;