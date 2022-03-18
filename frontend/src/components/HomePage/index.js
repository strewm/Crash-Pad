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
                <ViewListings />
                <MapContainer />
            </div>
        </>
    );
};

export default HomePage;
