import React, {useState} from 'react'

const Colortext = () => {

    const[textcolor, setTextcolor] = useState(false);

    const handleClick = ()=>{
        setTextcolor(!false)
    }

  return (

    <div>
        <button onClick={()=> handleClick()}> SHow/Hide Me !</button>
        
        {textcolor?<h1 style={{color: 'green'}}>I gotta do what I have to</h1> : ""}
        {/* { textcolor && <h1 style={{color: 'green'}}>I gotta do what I have to</h1> } */}
        

    </div>
  )
}

export default Colortext;