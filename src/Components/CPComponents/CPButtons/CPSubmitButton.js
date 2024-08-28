import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalBody, Container, Spinner } from 'reactstrap';
import './CPSubmitButton.css';

const CPSubmitButton = ({ onSave, loading, saveSuccess }) => {
  const [mainModal, setMainModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [message, setMessage] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    if (saveSuccess === true) {
      setMessage('Data saved successfully');
      setIcon('✔');
      setInfoModal(true);
      setTimeout(() => setInfoModal(false), 4000); // Auto-close after 4 seconds
    } else if (saveSuccess === false) {
      setMessage('Data not saved');
      setIcon('✖');
      setInfoModal(true);
      setTimeout(() => setInfoModal(false), 4000);
    }
  }, [saveSuccess]);

  const toggleMainModal = () => setMainModal(!mainModal);

  const handleSave = async () => {
    setMainModal(false);
    await onSave(); // Trigger the save action passed as a prop
  };

  const handleCancel = () => {
    setMainModal(false);
  };

  return (
    <Container className="text-center mt-5">
      <Button color="primary" className="w-100" onClick={toggleMainModal} disabled={loading}>
        {loading ? <Spinner size="sm" /> : 'Save'}
      </Button>

      <Modal isOpen={mainModal} toggle={toggleMainModal} centered>
        <ModalBody className="text-center">
          Do you want to save the changes?
        </ModalBody>
        <div className="justify-content-center d-flex">
          <Button color="success" onClick={handleSave} disabled={loading} className="mx-2">
            {loading ? <Spinner size="sm" /> : 'Yes'}
          </Button>
          <Button color="danger" onClick={handleCancel} disabled={loading} className="mx-2">
            No
          </Button>
        </div>
      </Modal>

      <Modal isOpen={infoModal} centered>
        <ModalBody className="text-center">
          <div className={`circle ${saveSuccess ? 'tick-circle' : 'cross-circle'}`}>
            <span className="icon">{icon}</span>
          </div>
          <h4>{message}</h4>
          <div className="timer-line"></div> {/* Timer line for 4 seconds */}
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default CPSubmitButton;
