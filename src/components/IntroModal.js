import React, {useState} from 'react';
import Modal from 'react-modal';


const IntroModal = () => {
    const [modalOpen, setModalOpen] = useState(true);

    return (
        <Modal isOpen={modalOpen}>
            <button onClick={() => setModalOpen(false)}>Close</button>
        </Modal>
    );
};

export default IntroModal;
