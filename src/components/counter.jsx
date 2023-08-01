import React,{useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleClick = () =>{
        setCount(count + 1);
    }

  return (

    <div>
        {count}
        <button onClick={handleClick}>JUst click me Up!</button>
    </div>
  )
}

export default Counter;