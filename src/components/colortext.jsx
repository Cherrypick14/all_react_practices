import React, {useState} from 'react'

const Colortext = () => {

    const[textcolor, setTextcolor] = useState("black");

    const handleClick = ()=>{
        setTextcolor(textcolor === "black"? "green" : "black")
    }

  return (

    <div>
        <button onClick={()=> handleClick()}> SHow/Hide Me !</button>
        <h1 style={{color: textcolor } }>I gotta do what I have to</h1>
        
        {/* {textcolor?<h1 style={{color: 'green'}}>I gotta do what I have to</h1> : ""} */}
        {/* { textcolor && <h1 style={{color: 'green'}}>I gotta do what I have to</h1> } */}
        

    </div>
  )
}

export default Colortext;