import React from "react";

import './App.css';
import HomeIcon from "./images/home.svg";
import GrantIcon from "./images/sendgrand.svg";
import GiveIcon from "./images/Give.svg";
import FavroriteIcon from "./images/Favorites.svg";
import ActivityIcon from "./images/Group.svg";
import LegacyIcon from "./images/Frame.svg";
import LogoutIcon from "./images/logout.svg";


const Sidebar = () => {
    return <div className="sidebar">
        <div className="top">
            <div className="text">
                <span><b>my</b></span>
                <span>giving</span>
            </div>
            <div className="logo">
                <div className="logo-style">
                    <img src="/profile.png" />
                </div>
                <div>
                    <p className="name">Louis Carter</p>
                </div>
                <div>
                    <button className="edit">Edit</button>
                </div>
            </div>

            <ul className="menu">
                <li className="menu-item">
                    <a>
                        <div className="icon">
                            <span > <img src={HomeIcon} /></span>
                            <span>Home</span>
                        </div>
                    </a>
                </li>
                <li className="menu-item">
                    <a>
                        <div className="icon">
                            <span > <img src={GrantIcon} /></span>
                            <span>Grant</span>
                        </div>
                    </a>
                </li>
                <li className="menu-item">
                    <a>
                        <div className="icon">
                            <span><img src={GiveIcon} /></span>
                            <span>Give</span>
                        </div>
                    </a>
                </li>
                <li className="menu-item">
                    <a>
                        <div className="icon">
                            <span><img src={FavroriteIcon} /></span>
                            <span>Favorites</span>
                        </div>
                    </a>
                </li>
                <li className="menu-item">
                    <a>
                        <div className="icon">
                            <span><img src={ActivityIcon} /></span>
                            <span>Activity</span>
                        </div>
                    </a>
                </li>
                <li className="menu-item">
                    <a>
                        <div className="icon">
                            <span><img src={LegacyIcon} /></span>
                            <span>Legacy</span>
                        </div>
                    </a>
                </li>

            </ul>

        </div>

        <div className="bottom">
            <div className="logout">
                <div className="icon">
                    <span><img src={LogoutIcon} /></span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    </div>
};

export default Sidebar;