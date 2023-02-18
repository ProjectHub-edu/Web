import React from 'react'
import '../styles/Input.scss'
interface InputInterface {
    label: string;
}
export default function Input({ label }: InputInterface) {
    const id = `${label}-input`;
    return (
        <div className="form" >
            <input type="text" id={id} className="form__input" autoComplete="off" placeholder=" " />
            <label htmlFor={id} className="form__label" >{label}</label >
        </div >
    )
}
