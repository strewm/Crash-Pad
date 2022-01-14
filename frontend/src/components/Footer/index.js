import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

function Footer() {

    return (
        <div className='footer-container'>
            <div className='footer-container-safety'>
                <div className='footer-header'>Crash Pad's Standards</div>
                <div className='footer-tiles'>
                    <div id='footer-tile-one'>
                        <div>Inclusion Policy</div>
                        <p>We have a zero-tolerance policy against discrimination at Crash Pad,
                            and are committed to helping our community be inclusive.
                        </p>
                    </div>
                    <div id='footer-tile-two'>
                        <div id='footer-tile-two-1'>
                            <div>Conservation Standard</div>
                            <p>Did you know that climbing and the activities surrounding
                                it can hurt our beloved lands?<br></br>While climbing has grown as a sport,
                                campsites have remained relatively the same. This has led to
                                unprecedented numbers of visitors who have no place to stay, and
                                often resort to illegal camping.<br></br>Crash Pad's mission is to alleviate
                                the stress placed on the land.
                            </p>
                        </div>
                        <div id='footer-tile-two-2'>
                            <div>Hoster + Hostee Standard</div>
                            <p>All Hosts are expected to adhere to Crash Pad's standards around providing
                                a positive experience, being a thoughtful neighbor, and serving as a
                                responsible citizen.<br></br>All Hostees should review and adhere to our standards
                                for safety, trip preparation, and respect in order to uphold Crash Pad's
                                most important value: “leave it better.”
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer-container-about'>
                <a id='footer-container-about-1' href="https://github.com/strewm/Crash-Pad" target="_blank">Crash Pad © 2022</a>
                <img id="footer-logo" src="/images/logo-3.png"/>
                <a id='footer-container-about-2' href="https://www.linkedin.com/in/savanah-trewman/" target="_blank">Savanah Trewman</a>
            </div>
        </div>
    );
};

export default Footer;
