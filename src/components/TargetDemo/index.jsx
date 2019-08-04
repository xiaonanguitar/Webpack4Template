import React from 'react';
import './index.less';

function TargetDemo () {
    return (
        <div>
            <a href="#id1">1</a>
            <a href="#id2">2</a>
            <a href="#id3">3</a>
            <div className="main">
                <div id="id1"></div>
                <div id="id2"></div>
                <div id="id3"></div>
            </div>
        </div>
    )
}

export default TargetDemo;