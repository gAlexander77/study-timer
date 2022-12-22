import React, { useState } from 'react';
import '../styles/components/Settings.css';

function Settings(props) {
    
    const [studyTime, setStudyTime] = useState(props.studyTime/60);
    const [breakTime, setBreakTime] = useState(props.breakTime/60);

    const handleExit = () => {
        props.setTrigger(false);
    }

    const handleStudyTimeChange = (evt) => {
        if(evt.target.value <= 99 && evt.target.value >= 0)
            setStudyTime(evt.target.value);
    }

    const handleBreakTimeChange = (evt) => {
        if(evt.target.value <= 99 && evt.target.value >= 0)
            setBreakTime(evt.target.value);
    }

    const handleSave = () => {
        props.setStudyTime(studyTime*60);
        props.setBreakTime(breakTime*60);
        props.setUpdated(false);
        props.setTrigger(false);
    }

    return(props.trigger) ? (
        <div className="settings-outer">
            <div className="settings-inner">
                <h1 className="setting-title">Settings</h1>
                <div className="input-container">
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
                <div className="settings-button-container">
                    <button className="cancel-btn" onClick={handleExit}>Cancel</button>
                    <button className="save-btn" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    ) : '';
}

export default Settings;