import React from 'react';

const Input = ({ type, placeholder, value, onChange }) => {
    return (
        <input className={"inp"} type={type} placeholder={placeholder} value={value} onChange={onChange} />
    );
};

export default Input;
