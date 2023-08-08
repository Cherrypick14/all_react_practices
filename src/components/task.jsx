import React from 'react'

const Task = (taskName, id) => {
    return (
      <div className='task'>
            <h1>{taskName}</h1>
            <button onClick={()=> deleteTodo(id)}>X</button>
     </div> 
      
    )
}
export default Task;