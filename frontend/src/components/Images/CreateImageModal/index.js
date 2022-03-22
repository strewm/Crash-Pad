import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import CreateImageForm from './CreateImageForm';
import './CreateImage.css';

function CreateImageModal({ listingId }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='image-modal'>
      <button id='add-image-button' onClick={() => setShowModal(true)}>
        <i className="fa-solid fa-camera-retro"></i>&nbsp; Add image
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateImageForm setShowModal={setShowModal} listingId={listingId} />
        </Modal>
      )}
    </div>
  );
}

export default CreateImageModal;
