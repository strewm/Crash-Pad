// CreateUser.js file
import { useState, useEffect } from "react";
import { getListingImages, getAllImages } from "../../../store/image";
import { useDispatch, useSelector } from "react-redux";
import './ViewListingImages.css';

const ViewListingImages = ({ listingId }) => {
    const dispatch = useDispatch();

    const images = useSelector(state => state.images);
    const imagesArr = Object.values(images);
    const imagesArrRev = imagesArr.reverse();


    useEffect(() => {
        // dispatch(getAllImages());
        dispatch(getListingImages(listingId))
    }, [dispatch]);

    if (!images) {
        return null;
    }

    let listingImages;
    if (imagesArr.length === 5) {
        listingImages = <div className="listing-images">
            <img src={imagesArrRev[0].url} alt='image'></img>
            <img src={imagesArrRev[1].url} alt='image'></img>
            <img src={imagesArrRev[2].url} alt='image'></img>
            <img src={imagesArrRev[3].url} alt='image'></img>
            <img src={imagesArrRev[4].url} alt='image'></img>
        </div>
    } else if (imagesArr.length === 4) {
        listingImages = <div className="listing-images">
            <img src={imagesArrRev[0].url} alt='image'></img>
            <img src={imagesArrRev[1].url} alt='image'></img>
            <img src={imagesArrRev[2].url} alt='image'></img>
            <img src={imagesArrRev[3]} alt='image'></img>
            <img src='/images/no-image.jpeg' alt='image'></img>
        </div>
    } else if (imagesArr.length === 3) {
        listingImages = <div className="listing-images">
            <img src={imagesArrRev[0].url} alt='image'></img>
            <img src={imagesArrRev[1].url} alt='image'></img>
            <img src={imagesArrRev[2].url} alt='image'></img>
            <img src='/images/no-image.jpeg' alt='image'></img>
            <img src='/images/no-image.jpeg' alt='image'></img>
        </div>
    } else if (imagesArr.length === 2) {
        listingImages = <div className="listing-images">
            <img src={imagesArrRev[0].url} alt='image'></img>
            <img src={imagesArrRev[1].url} alt='image'></img>
            <img src='/images/no-image.jpeg' alt='image'></img>
            <img src='/images/no-image.jpeg' alt='image'></img>
            <img src='/images/no-image.jpeg' alt='image'></img>
        </div>
    } else if (imagesArr.length === 1) {
        listingImages = <div className="listing-images">
            <img src={imagesArrRev[0].url} alt='image'></img>
            <img src='/images/no-image.jpeg' alt='image'></img>
            <img src='/images/no-image.jpeg' alt='image'></img>
            <img src='/images/no-image.jpeg' alt='image'></img>
            <img src='/images/no-image.jpeg' alt='image'></img>
        </div>
    } else if (imagesArr.length === 0) {
        listingImages = <div className="listing-images">
        <img src='/images/no-image.jpeg' alt='image'></img>
        <img src='/images/no-image.jpeg' alt='image'></img>
        <img src='/images/no-image.jpeg' alt='image'></img>
        <img src='/images/no-image.jpeg' alt='image'></img>
        <img src='/images/no-image.jpeg' alt='image'></img>
    </div>
    }


    return (
        <div className="image-container">
            {/* {imagesArrRev?.map((image) => {
                return <span key={image.id} className='image-container'>
                    <div>
                        <img
                            style={{ width: "250px" }}
                            src={image.url}
                            alt="image"
                        />
                    </div>
                </span>
            })} */}
            {listingImages}
        </div>
    );
};

export default ViewListingImages;
