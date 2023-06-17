import React from 'react';
import Button from "../UI/Button";
import MyInput from "../UI/MyInput";

const LoginForm = ({ onForgotPasswordClick, onRegistrationClick }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (

        <form onSubmit={handleSubmit}>
            {}
            <h2 className={'titleText'}>Логин</h2>

            <MyInput type="text" placeholder="Имя пользователя" />
            <MyInput type="password" placeholder="Пароль" />
            <Button>Войти</Button>
            <div>
                <a className={'subLink'} href="#" onClick={onForgotPasswordClick}>
                    Забыли пароль?
                </a>
                <a href="#" onClick={onRegistrationClick}>
                    Регистрация
                </a>
            </div>
        </form>
    );
};


export default LoginForm;
