import React from 'react';


export const Person = (props) =>{

    return(
        <div className='person'>
            <h1>Name: {props.name}</h1>
            <h2>Email: {props.email}</h2>
            <h2>Age: {props.age}</h2>
            <h2>This person{props.isStatus? "married": "single"} at the moment</h2>
            <>
            <h1>Shawn Colucci is lcoe to the following friends</h1>
            {props.allies.map((friends)=>{
              <div className='friends'>
                 <h3>{friends}</h3>
              </div>
            })}
            </>

        </div>
    )
   
}