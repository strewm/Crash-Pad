import React from 'react';
import SubNavigation from '../NavBars/SubNavigation';
import ViewListings from '../Listings/ViewListings';
import MapContainer from '../Maps';
import './Home.css';

function HomePage() {

    return (
        <>
            <SubNavigation />
            <div className='home-container'>
                {/* <div className='main-header'>
                    <div id='main-header-title'>Find your basecamp.</div>
                    <div id='main-header-text'>Discover spots to stay by your favorite crags.<br></br>Alpine starts supported by climbers, for climbers.</div>
                </div> */}
                {/* <div className='main-container'>
                    <div id='main-splash-image-header'>Where to?</div>
                    <div className='map'>
                        Hi this is where the maps API will be!
                    </div>
                </div> */}
                {/* <div className='sub-create-listing-container'>
                    <ListingCreateFormModal />
                </div> */}
                <ViewListings />
                <MapContainer />
            </div>
        </>
    );
};

export default HomePage;
