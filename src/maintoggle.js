import React from 'react';
import { useToggle } from './useToggle';

export const MainToggle = () => {
 
      const[invisible,toggle] = useToggle();

    return(
         <div className='maintoggle'>
            <button onClick={toggle}>
                {invisible ? "Hide" : "Show"}
            </button>
            {invisible && <h2>Hidden text</h2>}
       </div>
    )
} ;

