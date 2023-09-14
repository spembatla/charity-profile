import React from "react";

import './App.css';
import ArrowIcon from "./images/arrow.svg";
import BellIcon from "./images/bell.svg";
import SearchIcon from "./images/search.svg";

function Header() {
    return (
        <div className="header">
            <div className="header-title">
                <span>Charity Profile</span>
            </div>
            <div className="header-content">
                <div className="header-btn header-box">
                    <div className="header-text">
                        The Sample Family Fund
                    </div>
                    <span><img src={ArrowIcon} /></span>
                </div>
                <div className="header-btn">
                    <a className="btn menu-bar" href="#">
                        <img src={BellIcon} />
                    </a>
                </div>
                <div className="header-btn">
                    <a className="btn menu-bar" href="#">
                        <img src={SearchIcon} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;