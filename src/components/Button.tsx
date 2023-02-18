import React, { ReactNode } from 'react'
import './Button.scss'
interface ButtonInterface {
    children?: ReactNode;
    props?: any;
}
export default function Button({ children, ...props }: ButtonInterface) {
    return (
        <button {...props} className='btn'>{children}</button>
    )
}
