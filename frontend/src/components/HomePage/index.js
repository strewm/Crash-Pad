import React from 'react';
import ListingViewer from '../ListingViewer';
import ListingCreateFormModal from '../ListingCreateFormModal';
import './Home.css';

function HomePage() {

    return (
        <div className='home-container'>
            <div className='main-header'>
                <div id='main-header-title'>Find your basecamp.</div>
                <div id='main-header-text'>Discover spots to stay by your favorite crags.<br></br>Alpine starts supported by climbers, for climbers.</div>
            </div>
            {/* <div className='main-container'>
                <div id='main-splash-image-header'>Where to?</div>
                <div className='map'>
                    Hi this is where the maps API will be!
                </div>
            </div> */}
            <div className='sub-create-listing-container'>
                <ListingCreateFormModal />
            </div>
            <ListingViewer />
        </div>
    );
};

export default HomePage;
