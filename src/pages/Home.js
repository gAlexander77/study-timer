import React, { useState } from 'react';
import { Helmet, HelmetData } from 'react-helmet-async';
import Nav from '../components/Nav';
import Timer from '../components/Timer';
import Settings from '../components/Settings';
import Stats from '../components/Stats';
import '../styles/pages/Home.css';

function Home(){
    
    const [isBreak, setIsBreak] = useState(false);
    const [timerIsOn, setTimerIsOn] = useState(false);
    const [studyTime, setStudyTime] = useState(1800);
    const [breakTime, setBreakTime] = useState(300);
    const [settings, setSettings] = useState(false);
    const [stats, setStats] = useState(false);

    const [updated, setUpdated] = useState(true);
    
    const helmetData = new HelmetData({});
    return(
        <div className="home">
            <Helmet 
                helmetData={helmetData} 
                bodyAttributes={{style: `background-color : ${isBreak ? '#9C92B0' : '#227C6C'}`}}
            />
            <Nav
                settings={settings}
                setSettings={setSettings}
                stats={stats}
                setStats={setStats}
            />
            <Timer 
                isBreak={isBreak}
                setIsBreak={setIsBreak}
                timerIsOn={timerIsOn}
                setTimerIsOn={setTimerIsOn}
                studyTime = {studyTime}
                breakTime = {breakTime}
                updated={updated}
                setUpdated={setUpdated}
            />
            <Settings
                trigger={settings}
                setTrigger={setSettings}
                studyTime={studyTime}
                setStudyTime={setStudyTime}
                breakTime={breakTime}
                setBreakTime={setBreakTime}
                updated={updated}
                setUpdated={setUpdated}
            />
            <Stats
                trigger={stats}
                setTrigger={setSettings}
            />
        </div>
    );
}

export default Home;