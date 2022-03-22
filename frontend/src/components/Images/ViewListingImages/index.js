// CreateUser.js file
import { useState, useEffect } from "react";
import { getImages } from "../../../store/image";
import { useDispatch, useSelector } from "react-redux";

const ViewListingImages = ({ listingId }) => {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.session.user);

    const images = useSelector(state => state);
    console.log('~~~~~~~~~~~~', images)
    const imagesArr = Object.values(images);
    const imagesArrRev = imagesArr.reverse();


    useEffect(() => {
        dispatch(getImages());
    }, [dispatch]);

    if (!images) {
        return null;
    }


    return (
        <div>
            <div>hi..............</div>
            {imagesArrRev?.map((image) => {
                return <span key={image.id} className='image-container'>
                    <img
                        style={{ width: "150px" }}
                        src={image.url}
                        alt="image"
                    />
                </span>
            })}
        </div>
    );
};

export default ViewListingImages;
