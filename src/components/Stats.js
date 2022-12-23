import React, { useState, useEffect } from 'react';
import '../styles/components/Stats.css';

function Stats(props){

    const [time, setTime] = useState(0);
    const [hours,setHours] = useState(0);
    const [minutes,setMinutes] = useState(0);
    
    useEffect(() =>{
        if(localStorage.getItem('seconds') === null) {
            setTime(0);
        }
        else {
            setTime(parseInt(localStorage.getItem('seconds')));
            console.log(`I got ${time} seconds`)
            setHours(Math.trunc((time/60)/60));
            setMinutes(Math.trunc((time/60)%60));
        }
    },[props.trigger])

    

    return(props.trigger) ? (
        <div className="stats-outer">
            <div className="stats-inner">
                <h1>Today you have studied for</h1>
                <h1>a total of</h1>
                {hours===0 ? <p>{minutes} minutes</p> : <p>{hours} hours & {minutes} minutes</p>}
            </div>
        </div>
    ) : '';
}

export default Stats;