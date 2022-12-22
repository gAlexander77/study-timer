import React from 'react';
import '../styles/components/Nav.css';
import { FiSettings, FiBarChart } from 'react-icons/fi';

export default function Nav(props){
    return(
        <div className="nav">
            <h1 className="title">Study Timer</h1>
            <div className="menu">
                <button className="menu-btn" onClick={()=>props.setStats(!props.stats)}>
                    <FiBarChart className="stats-icon"/>
                    Stats
                </button>
                <button className="menu-btn" onClick={()=>props.setSettings(!props.settings)}>
                    <FiSettings className="settings-icon"/>
                    Settings
                </button>
            </div>    
        </div>
    );
}