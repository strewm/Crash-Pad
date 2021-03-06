import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateListingForm from './CreateListingForm';

function CreateListingModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='home-create-listing-button' onClick={() => setShowModal(true)}>
        <i className="fa-solid fa-hammer"></i>&nbsp; List a site
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateListingForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default CreateListingModal;
