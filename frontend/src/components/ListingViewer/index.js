import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getListings } from '../../store/listing';
import './ListingViewer.css';


const ListingViewer = () => {
    const dispatch = useDispatch();

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
        <main className='all-listings-container'>
            <div className='listings-header'>
                L I S T I N G S
            </div>
            <div className='listing-container-container'>
                {listingsArrReverse?.map((listing) => {
                    return <div key={listing.id} className='listing-container'>
                        <Link to={`/listings/${listing?.id}`} style={{textDecoration:'none'}}>
                            <div className='listing-name'>
                                {listing.name}
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
                            <div className='listing-description'>
                                {listing.description}
                            </div>
                        </Link>
                    </div>
                })}
            </div>
        </main>
    );
};

export default ListingViewer;
