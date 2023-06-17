import React from 'react';
import Button from "../UI/Button";
import MyInput from "../UI/MyInput";

const RegistrationForm = ({ onLoginClick }) => {
    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <form onSubmit={handleSubmit}>
            {}
            <h2 className={'titleText'}>Зарегистрироваться</h2>
            <MyInput type="text" placeholder="Имя" />
            <MyInput type="email" placeholder="Email" />
            <MyInput type="password" placeholder="Пароль" />
            <Button type="submit">Зарегистрироваться</Button>
            <div>
                <a className={'subLink'} href="#" onClick={onLoginClick}>
                    Авторизации
                </a>
            </div>
        </form>
    );
};

export default RegistrationForm;
