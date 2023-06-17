import React from 'react';
import LoginForm from './modalIn/LoginForm';
import ForgotPasswordForm from './modalIn/ForgotPasswordForm';
import RegistrationForm from './modalIn/RegistrationForm';

const Modal = ({ onClose, activeForm, onLoginClick, onForgotPasswordClick, onRegistrationClick }) => {
    const renderForm = () => {
        switch (activeForm) {
            case 'login':
                return <LoginForm onForgotPasswordClick={onForgotPasswordClick} onRegistrationClick={onRegistrationClick} />;
            case 'forgotPassword':
                return <ForgotPasswordForm onLoginClick={onLoginClick} onRegistrationClick={onRegistrationClick} />;
            case 'registration':
                return <RegistrationForm onLoginClick={onLoginClick} onForgotPasswordClick={onForgotPasswordClick} />;
            default:
                return null;
        }
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={stopPropagation}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
                {renderForm()}
            </div>
        </div>
    );
};

export default Modal;

