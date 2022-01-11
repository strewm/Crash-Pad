import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

import { getListings } from '../../store/listing';
import './ListingViewer.css';


const ListingViewer = () => {
    const dispatch = useDispatch();

    //   const { pokemonId } = useParams();

    //   const sessionUser = useSelector(state => state.session.user);

    //   const listings = useSelector(state => {
    //     return state.pokemon.list.map(pokemonId => state.pokemon[pokemonId]);
    //   });


    const listings = useSelector(state => state.listing.list);
    console.log('...........listings', listings)

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
                    return <div key={listing.name} className='listing-container'>
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
