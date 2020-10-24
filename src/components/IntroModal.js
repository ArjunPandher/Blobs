import React, {useState} from 'react';
import {Button, Modal} from '@material-ui/core';


const IntroModal = () => {
    const [modalOpen, setModalOpen] = useState(true);

    function closeModal() {
        setModalOpen(false);
    };

    return (
        <Modal open={modalOpen}>
            {/* <img src='../chicago.jpg' alt='' width='80%' height='80%' /> */}
            <Button
                onClick={closeModal}
                color='primary'
                variant='contained'
                style={styles}
            >EXPLORE</Button>
        </Modal>
    );
};

const styles = {
    marginLeft: 'auto'
}

export default IntroModal;
