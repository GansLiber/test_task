import React from 'react';
import Button from "../UI/Button";
import MyInput from "../UI/MyInput";

const ForgotPasswordForm = ({ onLoginClick, onRegistrationClick }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <form onSubmit={handleSubmit}>
            {}
            <h2 className={'titleText'}>Восстановить пароль</h2>
            <MyInput type="email" placeholder="Email" />
            <Button type="submit">Отправить</Button>
            <div>
                <a className={'subLink'} href="#" onClick={onLoginClick}>
                    Авторизации
                </a>
                <a href="#" onClick={onRegistrationClick}>
                    Регистрация
                </a>
            </div>
        </form>
    );
};


export default ForgotPasswordForm;
