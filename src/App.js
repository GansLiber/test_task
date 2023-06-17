import React, { useState } from 'react';
import Button from './myStaff/UI/Button';
import Modal from './myStaff/Modal';
import './myStaff/styles.css';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);

  const openModal = (modal) => {
    setModalOpen(true);
    setCurrentModal(modal);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentModal(null);
  };

  return (
      <div className="app">
        <Button onClick={() => openModal('login')}>Открыть</Button>

        {isModalOpen && (
            <>
              {currentModal === 'login' && (
                  <Modal
                      onClose={closeModal}
                      activeForm="login"
                      onForgotPasswordClick={() => openModal('forgotPassword')}
                      onRegistrationClick={() => openModal('registration')}
                  />
              )}
              {currentModal === 'forgotPassword' && (
                  <Modal
                      onClose={closeModal}
                      activeForm="forgotPassword"
                      onLoginClick={() => openModal('login')}
                      onRegistrationClick={() => openModal('registration')}
                  />
              )}
              {currentModal === 'registration' && (
                  <Modal
                      onClose={closeModal}
                      activeForm="registration"
                      onLoginClick={() => openModal('login')}
                      onForgotPasswordClick={() => openModal('forgotPassword')}
                  />
              )}
            </>
        )}
      </div>
  );
};

export default App;
