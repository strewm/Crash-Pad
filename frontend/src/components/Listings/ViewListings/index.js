import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getListings } from '../../../store/listing';
// import CreateListingModal from '../CreateListingModal';
import './ViewListings.css';


const ViewListings = () => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);

    const listings = useSelector(state => state.listings);
    const listingsArr = Object.values(listings);
    const listingsArrReverse = listingsArr.reverse();

    useEffect(() => {
        dispatch(getListings());
    }, [dispatch]);

    if (!listings) {
        return null;
    }


    return (
        <div className='all-listing-container'>
            {listingsArrReverse?.map((listing) => {
                return <div key={listing.id} className='listing-container'>
                    <Link to={`/listings/${listing?.id}`} style={{textDecoration:'none'}}>
                        <div>
                            <div className='listing-name'>
                                {listing.name}
                                {(listing?.userId === sessionUser.id) &&
                                    <div className='your-listing'>Your listing!</div>
                                }
                            </div>
                            <div className='listing-price'>
                                ${listing.price} / night
                            </div>
                            <div className='listing-full-address'>
                                {listing.address}
                                <br/>
                                {listing.city},{' '}
                                {listing.state}{' '}
                                {listing.country}
                            </div>
                            <div className='listing-coordinates'>
                                {listing.lat},{' '}
                                {listing.long}
                            </div>
                            {/* <div className='listing-description'>
                                {listing.description}
                            </div> */}
                        </div>
                        <div className="row-border"></div>
                    </Link>
                </div>
            })}
        </div>
    );
};

export default ViewListings;