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

    const updateFile = (e) => {
        const file = e.target.files[0];
        if (file) { setImage(file) };
    };

    // If multiple images...
    //   const updateFiles = (e) => {
    //     const files = e.target.files;
    //     setImages(files);
    //   };

    return (
        <div className="create-image">
            {errors.length > 0 &&
                errors.map((error) => <div key={error}>{error}</div>)}
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
            </form>
        </div>
    );
};

export default CreateImageForm;
