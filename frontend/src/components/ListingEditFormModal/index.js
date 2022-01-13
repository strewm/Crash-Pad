import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ListingEditForm from './ListingEditForm';

function ListingEditFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='edit-listing-button' onClick={() => setShowModal(true)}>EDIT LISTING</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ListingEditForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default ListingEditFormModal;
