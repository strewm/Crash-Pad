import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ListingCreateForm from './ListingCreateForm';

function ListingCreateFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='home-create-listing-button' onClick={() => setShowModal(true)}>C R E A T E</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ListingCreateForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default ListingCreateFormModal;
