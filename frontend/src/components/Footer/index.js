import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {

    return (
        <div className='footer-container'>
            <div className='footer-container-safety'>
                <div>Safety + Conservation</div>
                <div className='footer-tiles'>
                    <div id='footer-tile-one'>
                        <img />
                        <div>Safety is our #1 priority</div>
                    </div>
                    <div id='footer-tile-two'>
                        <img />
                        <div>Conservation is also our #1 priority</div>
                        <p>Did you know that climbing and the activities surrounding
                            it can hurt our beloved lands? While climbing has grown as a sport,
                            campsites have remained relatively the same. This has led to
                            unprecedented numbers of visitors who have no place to stay, and
                            often resort to illegal camping.
                        </p>
                    </div>
                    <div id='footer-tile-three'>
                        <img />
                        <div>Text</div>
                    </div>
                </div>
            </div>
            <div className='footer-container-about'>
                <div>
                    <NavLink exact to="https://www.linkedin.com/in/savanah-trewman/">Created by: Savanah Trewman</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;
