import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Nav from '../components/Nav';
import Timer from '../components/Timer';

function Home(){

    const [isBreak, setIsBreak] = useState(false);
    const [timerIsOn, setTimerIsOn] = useState(false);

    return(
        <div className="home">
            <Helmet bodyAttributes={{style: `background-color : ${isBreak ? '#9C92B0' : '#227C6C'}`}}/>
            <Nav/>
            <Timer 
                isBreak={isBreak}
                setIsBreak={setIsBreak}
                timerIsOn={timerIsOn}
                setTimerIsOn={setTimerIsOn}
            />
        </div>
    );
}

export default Home;