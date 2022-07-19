import React from 'react'
import './Button.css'

const Button = ({ variant = "primary", children }) => {
    return (
        <div className={`button ${variant}`}>{children}</div>
    )
}

export default Button