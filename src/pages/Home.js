import React, { useState } from 'react';
import { Helmet, HelmetData } from 'react-helmet-async';
import Nav from '../components/Nav';
import Timer from '../components/Timer';

import '../styles/pages/Home.css';

function Home(){
    const [isBreak, setIsBreak] = useState(false);
    const [timerIsOn, setTimerIsOn] = useState(false);
    
    const helmetData = new HelmetData({});
    return(
        <div className="home">
            <Helmet 
                helmetData={helmetData} 
                bodyAttributes={{style: `background-color : ${isBreak ? '#9C92B0' : '#227C6C'}`}}
            />
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