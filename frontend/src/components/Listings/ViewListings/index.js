import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getListings } from '../../../store/listing';
import { getAllImages } from '../../../store/image';
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
        dispatch(getAllImages());
    }, [dispatch]);

    if (!listings) {
        return null;
    }


    return (
        <div className='all-listing-container'>
            {listingsArrReverse?.map((listing) => {
                return <span key={listing.id} className='listing-container'>
                    <Link to={`/listings/${listing?.id}`} style={{textDecoration:'none'}}>
                        <div>
                            <span className='listing-name'>
                                {listing.name}
                            </span>
                            <span className='listing-price'>
                                ${listing.price} / night
                            </span>
                            <span className='listing-full-address'>
                                {listing.address}
                                <br/>
                                {listing.city},{' '}
                                {listing.state}
                                {/* {listing.country} */}
                            </span>
                            <span className='listing-coordinates'>
                                <span>
                                    {listing.lat},{' '}
                                    {listing.lng}
                                </span>
                                {(listing?.userId === sessionUser.id) &&
                                    <div className='your-listing'>Your listing!</div>
                                }
                            </span>
                            {/* <div className='listing-description'>
                                {listing.description}
                            </div> */}
                        </div>
                        <span className="row-border"></span>
                    </Link>
                </span>
            })}
        </div>
    );
};

export default ViewListings;
