import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

import AddDrinkForm from '../AddDrinkForm';

import './AddDrinkButton.css'

const AddDrinkButton = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <i className="fas fa-plus-circle" onClick={() => setShowModal(true)}></i>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddDrinkForm type='create' />
                </Modal>
            )}
        </div>
    )
}

export default AddDrinkButton;
