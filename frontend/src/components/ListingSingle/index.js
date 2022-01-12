import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';

import { getOneListing } from '../../store/listing';
import { deleteListing } from '../../store/listing';
import './ListingSingle.css';


const ListingSingle = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { listingId } = useParams();
    // console.log(listingId)
    const singleListing = useSelector(state => state.listing.list);

    console.log(singleListing);
    const sessionUser = useSelector(state => state.session.user);

    // const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(getOneListing(listingId));
    }, [listingId]);

    // if (!listings) {
    //     return null;
    // }

    const handleDelete = async (e) => {
        e.preventDefault();

        await dispatch(deleteListing(listingId))
            .then(history.push("/"))
            .catch(async (res) => {
                throw new Error ("Unable to delete listing.")
            })
    }


    return (
        <main className='one-listings-container'>
            <div className='listing-header'>
                L I S T I N G
            </div>
            <div className='one-listing'>
                {singleListing}
            </div>
            <div>
                {(singleListing?.userId === sessionUser.id) &&
                    <button
                        type="submit"
                        id='delete-listing-button'
                        onClick={handleDelete}
                    >DELETE LISTING</button>
                }
            </div>
            {/* <div className='one-listing-container-container'>
                {listings?.map((listing) => {
                    return <div key={listing.id} className='one-listing-container'>
                        <div className='one-listing-name'>
                            {listing.name}
                        </div>
                        <div className='one-listing-price'>
                            ${listing.price} / night
                        </div>
                        <div className='one-listing-full-address'>
                            {listing.address}
                            <br/>
                            {listing.city},{' '}
                            {listing.state}{' '}
                            {listing.country}
                        </div>
                        <div className='one-listing-coordinates'>
                            {listing.lat},{' '}
                            {listing.long}
                        </div>
                        <div className='one-listing-description'>
                            {listing.description}
                        </div>
                    </div>
                })}
            </div> */}
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

export default ListingSingle;
