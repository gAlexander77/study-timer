import React, { useState, useEffect } from 'react';

function Timer(props) {

    const [timer, setTimer] = useState(1000);
    const [intialTime, setInitialTime] = useState(1000);


    useEffect(() => {
        // Declare an interval that updates the timer every second
        const interval = setInterval(() => {
          setTimer(timer - 1);
        }, 1000);
        
        // Clear the interval when the timer reaches 0
        if (timer === 0) {
            clearInterval(interval);
        }

        // Clean up the interval when the component unmounts
        return () => clearInterval(interval);
      }, [timer]);
    

    function TimerOptions(){
        return(
            <div className="timer-options-container">
                <button>Study</button>
                <button>Break</button>
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
                <p>{minutes}:{seconds}</p>
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
            backgroundColor: 'grey',
            width: '375px',
            height: '12px',
            borderRadius: 10
        }

        const style = {
            backgroundColor: 'white',
            width: `${progress}%`,
            height: '100%',
            borderRadius: 10,
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
        return(
            <div>
                <button>Start</button>
            </div>
        );
    }

    return(
        <div className="timer">
            <TimerOptions/>
            <DisplayTime/>
            <ProgressBar/>
        </div>
    );
}

export default Timer;