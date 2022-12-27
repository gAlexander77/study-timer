import React, { useState } from 'react';
import { FiSettings } from 'react-icons/fi';
import '../styles/components/Settings.css';

function Settings(props) {
    
    const [studyTime, setStudyTime] = useState(props.studyTime/60);
    const [breakTime, setBreakTime] = useState(props.breakTime/60);
    const [alarmVolume, setAlarmVolume] = useState(props.alarmVolume);

    const handleExit = () => {
        props.setTrigger(false);
        setStudyTime(props.studyTime/60);
        setBreakTime(props.breakTime/60);
        setAlarmVolume(props.alarmVolume);
    }

    const handleStudyTimeChange = (evt) => {
        if(evt.target.value <= 99 && evt.target.value >= 0)
            setStudyTime(evt.target.value);
    }

    const handleBreakTimeChange = (evt) => {
        if(evt.target.value <= 99 && evt.target.value >= 0)
            setBreakTime(evt.target.value);
    }

    const handleAlarmVolumeChange = (evt) => {
        setAlarmVolume(evt.target.value);
    }

    const handleSave = () => {
        props.setStudyTime(studyTime*60);
        props.setBreakTime(breakTime*60);
        props.setAlarmVolume(alarmVolume);
        props.setUpdated(false);
        props.setTrigger(false);
    }

    return(props.trigger) ? (
        <div className="settings-outer">
            <div className="settings-inner">
                <div className="settings-title">
                    <FiSettings className="settings-menu-icon"/>
                    <h1 className="setting-header">Settings</h1>
                </div>
                <div className="input-container">
                    <div className="time-container">
                        <div className="study-container">
                            <label className="study-label">Study Time</label>
                            <div className="mins-input-container">
                                <input className="study-input" type="number" value={studyTime} onChange={handleStudyTimeChange}/>
                                <p className="minutes-tag">mins</p>
                            </div>
                        </div>
                        <div className="break-container">
                            <label className="break-label">Break Time</label>
                            <div className="mins-input-container">
                                <input className="break-input" type="number" value={breakTime} onChange={handleBreakTimeChange}/>
                                <p className="minutes-tag">mins</p>
                            </div>
                        </div>
                    </div>
                    <div className="alarm-volume-container">
                        <label className="alarm-volume-label">Alarm Volume</label>
                        <input 
                            type="range" 
                            className="range-style" 
                            value={alarmVolume}
                            onChange={handleAlarmVolumeChange} 
                            min="0"
                            max="1"
                            step="0.001"
                        />
                    </div>
                </div>
                <div className="settings-button-container">
                    <button className="cancel-btn" onClick={handleExit}>Cancel</button>
                    <button className="save-btn" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    ) : '';
}

export default Settings;