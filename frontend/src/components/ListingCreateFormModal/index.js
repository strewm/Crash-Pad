import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ListingCreateForm from './ListingCreateForm';

function ListingCreateFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='create-listing-button' onClick={() => setShowModal(true)}>CREATE LISTING</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ListingCreateForm />
        </Modal>
      )}
    </>
  );
}

export default ListingCreateFormModal;
