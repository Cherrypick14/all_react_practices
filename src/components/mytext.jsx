import React,{useState} from 'react'

const Mytext = () => {

    const[text, setText]= useState("")

    const handleChange = (event )=>{
        setText(event.target.value)
    }
  return (
    <div className='text'>
         <input type="text" style={{textAlign: 'center'}} onChange={handleChange} />
      
        <h1>{text}</h1>
    </div>
  )
}

export default Mytext;