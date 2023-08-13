import React,{useState,useEffect} from 'react'

const Mytext = () => {

    const[text, setText]= useState("")

    useEffect(()=>{

   console.log("We gotta do this mahn");

   return () => {

    console.log("we can try again next time");

   };
    },[text]);

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