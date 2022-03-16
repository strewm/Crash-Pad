import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CreateListingModal from '../../Listings/CreateListingModal';
import './SubNavigation.css';

function SubNavigation() {

    // Set up conditionals + state for buttons that would toggle between filtered options
        // Default = all listings
        // Location
        // Amenities

    return (
        <div className='subnav-container'>
            <div id='option-1'>
                <i class="fa-solid fa-campground"></i>
                <div>&nbsp; Campsites</div>
            </div>
            <div id='option-2'>
                <CreateListingModal />
            </div>
            {/* <div id='option-3'>
                <i class="fa-solid fa-map-location"></i>
                <div>Location</div>
            </div>
            <div id='option-4'>
                <i class="fa-solid fa-signs-post"></i>
                <div>Amenities</div>
            </div> */}
    </div>
    );
};

export default SubNavigation;
