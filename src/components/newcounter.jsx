import React, {useState} from 'react'

const Newcounter = () => {

    const[count, setCount] = useState(0);


const handleIncrement = () =>{

        setCount(count+ 1)
        }
const handleDecrement = () =>{

        setCount(count-1)
        }
const handleSet = ()=>{

        setCount(0)
            
        }

  return (
    <React.Fragment>
      <button onClick={()=>handleIncrement()}>+</button>
       {count} 
      <button onClick={()=>handleDecrement()}>-</button>

      <button onClick={()=>handleSet()}> Set to Zero</button>

    </React.Fragment>
  )
}

export default Newcounter;