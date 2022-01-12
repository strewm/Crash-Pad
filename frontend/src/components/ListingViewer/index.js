import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link, Route, useParams } from 'react-router-dom';

import ListingSingle from '../ListingSingle';
import { getListings } from '../../store/listing';
import './ListingViewer.css';


const ListingViewer = () => {
    const dispatch = useDispatch();

    const listings = useSelector(state => state.listing.list);
    // const listings = useSelector(state => state.listing);

    // console.log('...........listings', listings)

    // const [showForm, setShowForm] = useState(false);

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
                {listings?.map((listing) => {
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
            {/* {showForm ? (
                <CreatePokemonForm hideForm={() => setShowForm(false)} />
            ) : (
                <Route path="/pokemon/:pokemonId">
                    <PokemonDetail />
                </Route>
            )} */}
        </main>
    );
};

export default ListingViewer;
