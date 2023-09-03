import React from 'react';

import { useCount } from './useCount';

export const Newcounter = ()=>{

    const {count, increase, decrease, restart} = useCount();

    return (
        <div className='counterr'>
            {count}
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
            <button onClick={restart}>Restart</button>
        </div>
    )

}