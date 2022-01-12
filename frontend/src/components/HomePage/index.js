import React from 'react';
import ListingViewer from '../ListingViewer';
import ListingCreateForm from '../ListingCreateForm';
import './Home.css';

function HomePage() {

    return (
        <div className='home-container'>
            <div className='main-header'>
                <div id='main-header-title'>Find your basecamp.</div>
                <div id='main-header-text'>Discover spots to stay by your favorite crags.<br></br>Alpine starts supported by climbers, for climbers.</div>
            </div>
            <div className='main-container'>
                <div id='main-splash-image-header'>Where to?</div>
                {/* <img src='/images/splash/splash-main-3.jpg' alt='splash main image'/> */}
            </div>
            <div className='sub-create-listing-container'>
                *Create listing container*
                <ListingCreateForm />
            </div>
            <div className='map'>
                Hi this is where the maps API will be!
            </div>
            <ListingViewer />
        </div>
    );
};

export default HomePage;
