// CreateUser.js file
import { useState, useEffect } from "react";
import { getListingImages } from "../../../store/image";
import { useDispatch, useSelector } from "react-redux";

const ViewListingImages = ({ listingId }) => {
    const dispatch = useDispatch();

    const images = useSelector(state => state.images);
    console.log('~~~~~~~~~~~~', images)
    const imagesArr = Object.values(images);
    const imagesArrRev = imagesArr.reverse();


    useEffect(() => {
        dispatch(getListingImages(listingId));
    }, [dispatch]);

    if (!images) {
        return null;
    }


    return (
        <div>
            <div>hi..............</div>
            {imagesArrRev?.map((image) => {
                return <span key={image.url} className='image-container'>
                    <div>
                        <img
                            style={{ width: "150px" }}
                            src={image.url}
                            alt="image"
                        />
                    </div>
                </span>
            })}
        </div>
    );
};

export default ViewListingImages;
