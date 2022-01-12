import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams, useHistory } from 'react-router-dom';

import { getOneListing } from '../../store/listing';
import { deleteListing } from '../../store/listing';
import './ListingSingle.css';


const ListingSingle = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const { id } = useParams();
    console.log(id)
    const singleListing = useSelector(state => state.listing[id]);
    console.log(singleListing)

    const sessionUser = useSelector(state => state.session.user);

    // const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(getOneListing(id));
    }, [dispatch, id]);

    // if (!listings) {
    //     return null;
    // }

    const handleDelete = async (e) => {
        e.preventDefault();

        await dispatch(deleteListing(id))
            .then(history.push("/"))
            .catch(async (res) => {
                throw new Error("Unable to delete listing.")
            })
    }


    return (
        <div className='one-listing-component'>
            <div className='one-listing-header'>
                L I S T I N G
            </div>
            <div className='one-listing-container-container'>
                <div className='one-listing-container'>
                    <div className='one-listing'>
                        <div className='one-listing-name'>
                            {singleListing?.name}
                        </div>
                        <div className='one-listing-price'>
                            ${singleListing?.price} / night
                        </div>
                        <div className='one-listing-full-address'>
                            {singleListing?.address}
                            <br />
                            {singleListing?.city},{' '}
                            {singleListing?.state}{' '}
                            {singleListing?.country}
                        </div>
                        <div className='one-listing-coordinates'>
                            {singleListing?.lat},{' '}
                            {singleListing?.long}
                        </div>
                        <div className='one-listing-description'>
                            {singleListing?.description}
                        </div>
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
                    {/* {showForm ? (
                        <CreatePokemonForm hideForm={() => setShowForm(false)} />
                    ) : (
                        <Route path="/pokemon/:pokemonId">
                            <PokemonDetail />
                        </Route>
                    )} */}
                </div>
            </div>
        </div>
    );
};

export default ListingSingle;
