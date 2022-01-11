import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';

import { getListings } from '../../store/listing';
// import PokemonDetail from './PokemonDetail';
// import CreatePokemonForm from './CreatePokemonForm';
// import Fab from './Fab';
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
        <main>
            <div>
                These are listings:
            </div>
            <div>
                {listings?.map((listing) => {
                    return <div key={listing.name}>
                        {listing.name}
                        <br/>
                        {listing.address}
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
