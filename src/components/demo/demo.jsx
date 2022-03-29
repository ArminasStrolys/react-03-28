import React from 'react';
import { useState, useEffect } from 'react';

const Demo = () => {
    useEffect(()=>{
        console.log('WORK')
    }, [])
    const [sayHi, setSayHi] = useState('')
    if (sayHi.length===0){
        return(
            <div>
                <button onClick={()=>{setSayHi('OLA')}}>ENTER</button>
                {console.log(sayHi)}
            </div>
        )
    }
    return (
        <div>
            
        </div>
    );
}

export default Demo;
