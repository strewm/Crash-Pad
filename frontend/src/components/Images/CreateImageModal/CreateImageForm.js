import { useState } from "react";
import { createImage } from "../../../store/image";
import { useDispatch, useSelector } from "react-redux";
import './CreateImage.css';

const CreateImageForm = ({ setShowModal, listingId }) => {
    const [image, setImage] = useState(null);
    // const [images, setImages] = useState([]); // If multiple images...
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = [];

        dispatch(createImage({ image, listingId }))
        // .then(() => {
        //     setImage(null);
        // })
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) {
            newErrors = data.errors;
            setErrors(newErrors);
            }
        });

        setShowModal(false);
    };

    const handleCancel = (e) => {
        e.preventDefault();
        setShowModal(false);
    };

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) { setImage(file) };
    };

    // If multiple images...
    //   const updateFiles = (e) => {
    //     const files = e.target.files;
    //     setImages(files);
    //   };

    let preview;
    if (!image) {
        preview = <img id='old-image-preview' src='/images/no-image.jpeg' alt='image-preview'/>
    } else {
        preview = <img id='new-image-preview' src={URL.createObjectURL(image)} alt='image-preview'/>
    }



    return (
        <div className="create-image">
            {errors.length > 0 &&
                errors.map((error) => <div key={error}>{error}</div>)}
            {preview}
            <form style={{ display: "flex", flexFlow: "column" }} onSubmit={handleSubmit}>
                <label>
                    <input type="file" onChange={updateFile} />
                </label>
                {/* <label>
                    Multiple Upload
                    <input
                    type="file"
                    multiple
                    onChange={updateFiles} />
                </label> */}
                <button type="submit">CONFIRM</button>
                <button type="button" id='cancel-create-button' onClick={handleCancel}>CANCEL</button>
            </form>
        </div>
    );
};

export default CreateImageForm;
