import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ListingCreateForm from './ListingCreateForm';

function ListingCreateFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id='home-create-listing-button' onClick={() => setShowModal(true)}>
        <i class="fa-solid fa-hammer"></i>&nbsp; List a site
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <ListingCreateForm setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default ListingCreateFormModal;
