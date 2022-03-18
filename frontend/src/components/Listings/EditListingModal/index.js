import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { Modal } from '../../../context/Modal';
import EditListingForm from './EditListingForm';
import { getKey } from '../../../store/maps';



function EditListingModal() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const key = useSelector((state) => state.maps.key);

  useEffect(() => {
    if (!key) {
      dispatch(getKey());
    }
  }, [dispatch, key]);

  if (!key) {
    return null;
  }


  return (
    <>
      <button id='edit-listing-button' onClick={() => setShowModal(true)}>EDIT LISTING</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditListingForm setShowModal={setShowModal} geocodeKey={key.googleMapsAPIKeyGeocode}/>
        </Modal>
      )}
    </>
  );
}

export default EditListingModal;
