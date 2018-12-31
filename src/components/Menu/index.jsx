import React from 'react';
import './index.css';

function Menu() {
    return (
        <div className="middle">
            <div className="menu">
                <li className="item" id="profile">
                    <a href="#profile" className="btn"><i className="far fa-user"></i>Profile</a>
                    <div className="smenu">
                        <a href="#">Posts</a>
                        <a href="#">Picture</a>
                    </div>
                </li>
                <li className="item" id="message">
                    <a href="#message" className="btn"><i className="far fa-envelope"></i>Messages</a>
                    <div className="smenu">
                        <a href="#">New</a>
                        <a href="#">Sent</a>
                        <a href="#">Spam</a>
                    </div>
                </li>
                <li className="item" id="settings">
                    <a href="#settings" className="btn"><i className="fas fa-cog"></i>Settings</a>
                    <div className="smenu">
                        <a href="#">Password</a>
                        <a href="#">Language</a>
                    </div>
                </li>
                <li className="item">
                    <a href="#" className="btn"><i className="fas fa-luggage-cart"></i>Logout</a>
                </li>
            </div>
        </div>
    )
}

export default Menu;