import React from 'react';
import './index.css';

function SearchBox () {
    return (
        <div className="search-box">
            <input className="search-txt" type="text" placeholder="Type to search..."/>
            <a href="#" className="search-btn">
                <i className="fas fa-search"></i>
            </a>
        </div>
    )
}

export default SearchBox;