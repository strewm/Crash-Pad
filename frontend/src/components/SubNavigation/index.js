import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
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
                {/* <ListingCreateFormModal /> */}
            </div>
    </div>
    );
};

export default SubNavigation;
