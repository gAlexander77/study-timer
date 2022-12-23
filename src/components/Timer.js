import React, { useState, useEffect } from 'react';
import '../styles/components/Timer.css'
import AlarmSound from '../assets/Alarm.mp3'

function Timer(props) {

    const [timer, setTimer] = useState(0);
    const [intialTime, setInitialTime] = useState(0);

    useEffect(() => {
        
        const d = new Date();
        console.log(`${d.getMonth()}-${d.getDate()}-${d.getFullYear()}`)
        
        if(props.isBreak === true) {
            props.setTimerIsOn(false);
            setTimer(props.breakTime);
            setInitialTime(props.breakTime);
        }
        else if(props.isBreak === false) {
            props.setTimerIsOn(false);
            setTimer(props.studyTime);
            setInitialTime(props.studyTime);
        }
    }, [props.isBreak]);

    useEffect(() => {
        if(props.timerIsOn === true){ 
            // Declare an interval that updates the timer every second
            const interval = setInterval(() => {
            setTimer(timer - 1);
            }, 1000);
            
            // Clear the interval when the timer reaches 0
            if (timer === 0) {
                clearInterval(interval);
                const alarm = new Audio(AlarmSound);
                alarm.volume = 0.45;
                alarm.play();
                props.setIsBreak(!props.isBreak);
            }
            // Clean up the interval when the component unmounts
            return () => clearInterval(interval);
        }   
    }, [timer, props.timerIsOn]);

    // Updates timer
    useEffect(() => {
        if(props.timerIsOn === false && props.updated === false) {
            if(props.isBreak === true) {
                props.setTimerIsOn(false);
                setTimer(props.breakTime);
                setInitialTime(props.breakTime);
                props.setUpdated(true);
            }
            else if(props.isBreak === false)  {
                props.setTimerIsOn(false);
                setTimer(props.studyTime);
                setInitialTime(props.studyTime);
                props.setUpdated(true)
            }
        }
    }, [props.updated, props.timerIsOn]);
    
    function TimerOptions(){

        const studyStyle = {
            backgroundColor: `${props.isBreak ? '' : 'rgba(0, 0, 0, 0.233)'}`
        }

        const breakStyle = {
            backgroundColor: `${props.isBreak ? 'rgba(0, 0, 0, 0.233)' : ''}`
        }
        return(
            <div className="timer-options-container">
                <button style={studyStyle} className="mode-btn" onClick={()=>props.setIsBreak(false)}>Study</button>
                <button style={breakStyle} className="mode-btn" onClick={()=>props.setIsBreak(true)}>Break</button>
            </div>
        );
    }

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    
    function DisplayTime(){

        useEffect(() => {
            setMinutes(Math.trunc(timer/60));
            setSeconds(timer%60);
            console.log(`Minutes:${minutes} Seconds:${seconds}`);
        }, [timer]);

        return(
            <div className="display-time-container">
                {minutes>=10 ? 
                    <p className="timer-text">{minutes}:</p> : 
                    <p className="timer-text">0{minutes}:</p>
                }
                {seconds>=10 ? 
                    <p className="timer-text">{seconds}</p> : 
                    <p className="timer-text">0{seconds}</p>
                }
            </div>
        );
    }
    
    const [progress, setProgress] = useState(0);
    
    function ProgressBar(){

        useEffect(() => {
            setProgress((((timer/intialTime)*100)-100)*-1);
            console.log(`Timer is ${progress}% Done!`);
        }, [timer, intialTime]);

        const container = {
            position: 'relative'
        }

        const styleOutter = {
            backgroundColor: 'rgba(0, 0, 0, 0.100)',
            width: '375px',
            height: '12px',
            borderRadius: '10px',
            overflow: 'hidden',
        }

        const style = {
            backgroundColor: 'white',
            width: `${progress}%`,
            height: '100%',
            index: '10'
        }

        return(
            <div style={container}>
                <div style={styleOutter}>
                    <div style={style}/>
                </div>
            </div>
        );
    }

    function StartAndStop(){

        const textColor = {
            color: `${props.isBreak ? '#9C92B0' : '#227C6C'}`
        }

        return(
            <div>
                <button 
                    className="toggle-btn"
                    style={textColor}
                    onClick={()=>props.setTimerIsOn(!props.timerIsOn)}>
                    {props.timerIsOn ? 'STOP' : 'START'}
                </button>
            </div>
        );
    }

    return(
        <div className="timer">
            <div className="timer-container">    
                <TimerOptions/>
                <DisplayTime/>
                <ProgressBar/>
                <StartAndStop/>
            </div>
        </div>
    );
}

export default Timer;