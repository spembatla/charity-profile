import React from "react";
import ReactPlayer from 'react-player';

import LocationIcon from './images/location.svg';
import SendIcon from './images/send.svg';
import FavoriteIcon from './images/heartstroke.svg';
import MapIcon from './images/map.svg';
import PhoneIcon from './images/phone.svg';
import WebsiteIcon from './images/website.svg';
import TwitterIcon from './images/twitter.svg';
import FackbookIcon from './images/Facebook.svg';
import InstagramIcon from './images/instagram.svg';
import ReliefIcon from './images/relief.svg';
import HumnaityIcon from './images/H&M.svg';
import WorldIcon from './images/environment.svg';
import MissionIcon from  './images/mission.svg';

const grants = [{
    grant: '5',
    subText: 'NCG givers',
    mainText: 'have charity in their favorite charities list'
}, {
    grant: '$10',
    mainText: 'grants to this charity (my fund)'
}, {
    grant: '$25,307',
    mainText: 'grants to this charity (all funds)'
}]

const abouts = [
    {
        text: "Lorem Ipsum is simply dummy text",
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    }
]

const src = "https://youtu.be/kko3VwOhHaw";


const Content = () => {
    return (
        <div className="container">
            <div className="content-column">
                <div className="card">
                    <div className="grant-info">
                        <div className="send-grant">
                            <div className="logo-wrapper">
                                <div className="logo-content">
                                    <img className="logos" src="/logo.png" alt="logo" />
                                </div>
                                <div className="text-wrapper">
                                    <div className="main-text">
                                        Boys & Girls Clubs of Southern Maine
                                    </div>
                                    <div className="location">
                                        <img src={LocationIcon} /> Portland, N/A
                                    </div>
                                </div>
                            </div>
                            <div className="send-buttons">
                                <div className="buttons-container">
                                    <button className="primary">
                                        <img src={SendIcon} /> Send a grant
                                    </button>
                                    <button className="icon-button">
                                        <img src={FavoriteIcon} className="fav-btn" />
                                    </button>
                                </div>
                            </div>


                        </div>
                        <div className="grants">
                            {grants && grants.map((g, i) => {
                                return <div className="grant-card" key={`grant-${i}`}>
                                    <div className="grant-overview"><span className="grant-value">{g.grant}</span> {g.subText && <span>{g.subText}</span>}</div>
                                    <div className="grant-main-text">{g.mainText}</div>
                                </div>
                            })}
                        </div>

                    </div>

                </div>
                <div className="card">
                    <div className="grant-info">
                        <div className="video">
                            <div className="video-content">
                                <div className="video-title">Videos block</div>
                                <div className="video-player">
                                    <ReactPlayer url="https://youtu.be/kko3VwOhHaw" width="100%" autoplay />

                                </div>
                            </div>
                            <div className="video-content">
                                <div className="video-title">About us:</div>
                                <div className="about-list">
                                    <ul className="abouts">
                                        {abouts.map((about, i) => {
                                            return <li className="about-item">{about.text}</li>;
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-column2">
                <div className="card">
                    <div className="contact-info">
                        <div className="contact-title">Contact Information:</div>
                        <div className="contact-content">
                            <div className="contact-contents">
                                <div>
                                    <img src={MapIcon} />
                                </div>
                                <div>Chino Valley Community Church 14601 Peyton DrChino Hills, CA 91709</div>
                            </div>
                            <div className="contact-contents">
                                <div>
                                    <img src={PhoneIcon} />
                                </div>
                                <div>909-606-4848</div>
                            </div>
                            <div className="contact-contents">
                                <div>
                                    <img src={WebsiteIcon} />
                                </div>
                                <div>cvcchurch.org</div>
                            </div>
                            <div className="social">
                                <div>
                                    <img src={TwitterIcon} />
                                </div>
                                <div>
                                    <img src={FackbookIcon} />
                                </div>
                                <div>
                                    <img src={InstagramIcon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="contact-info">
                        <div className="cause-wrapper">
                            <div className="contact-title">Primary cause:</div>
                            <div>
                                <a href="www.dummy.com/learn-more" className="learn-more">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="contact-content">
                            <div className="small-text">
                                <div>
                                    <img src={ReliefIcon} />
                                </div>
                                <div>
                                Disaster relief 
                                </div>
                            </div>

                            <hr className="border" />

                            <div className="cause-wrapper">
                                <div className="contact-title">Secondary causes:</div>

                            </div>
                            <div className="small-text">
                                <div>
                                    <img src={HumnaityIcon} />
                                </div>
                                <div>
                                Humanitarian aid & development
                                </div>
                            </div>

                            <div className="small-text">
                                <div>
                                    <img src={WorldIcon} />
                                </div>
                                <div>
                                Environment
                                </div>
                            </div>

                            <div className="small-text">
                                <div>
                                    <img src={MissionIcon} />
                                </div>
                                <div>
                                Evangelism & missions
                                </div>
                            </div>
                            
                        </div>
                    </div>

                </div>

            </div>


        </div>
    );
};

export default Content;