import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import EditListingForm from './EditListingForm';

function EditListingModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='edit-listing-button' onClick={() => setShowModal(true)}>EDIT LISTING</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditListingForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default EditListingModal;
