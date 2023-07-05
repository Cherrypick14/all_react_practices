import React from 'react'
import { planetts } from '../allplanets'

const Planets = () => {
    console.log(planetts);

  return (
    <>
       { planetts.map((myplanets,key)=>{

         return (
            myplanets.isGasPlanet && ( 
                
                <div key={myplanets.id}>
                Name: <h1> {myplanets.name} </h1> <br/>
              </div> 
            ) 
         );
          
       })}
    </>
  )
}

export default Planets;