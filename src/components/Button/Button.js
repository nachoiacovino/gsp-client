import React from 'react'
import './Button.css'

const Button = ({ character, handleClick }) => {
    return (
        <div onClick={handleClick} className="Button">
            {character}
        </div>
    )
}

export default Button
