import React from 'react';
import './index.css';

function ProgressBar () {
    return (
        <div className="skills">
            <h1>My Skills</h1>
            <li><h3>HTML</h3><span className="bar"><span className="html"></span></span></li>
            <li><h3>CSS</h3><span className="bar"><span className="css"></span></span></li>
            <li><h3>JQUERY</h3><span className="bar"><span className="jquery"></span></span></li>
            <li><h3>JAVASCRIPT</h3><span className="bar"><span className="javascript"></span></span></li>
        </div>
    )
}

export default ProgressBar;