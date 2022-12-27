import React, { useState, useEffect } from 'react';
import { FaTimes } from "react-icons/fa";
import { ImFire } from 'react-icons/im';
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
                <FaTimes className="stats-exit-btn" onClick={() => props.setTrigger(!props.trigger)}/>
                <h1 className="stats-header-1">Today you have studied for</h1>
                <h1 className="stats-header-2">a total of</h1>
                {hours===0 ? 
                    <>
                        {minutes !== 1 ? <p className="stats-display">{minutes} minutes</p>: 
                        <p className="stats-display">{minutes} minute</p>}
                    </>: 
                    <>
                        { hours > 1 ? <p className="stats-display">{hours} hours & {minutes} minutes</p>: 
                        <p className="stats-display">{hours} hour & {minutes} minutes</p>}
                    </>
                }
                <ImFire className="stats-fire-icon"/>
            </div>
        </div>
    ) : '';
}

export default Stats;