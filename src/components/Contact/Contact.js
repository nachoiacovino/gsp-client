import React from 'react'
import './Contact.css'

const Contact = ({ name, avatar }) => {
    return (
        <div className="Contact">
            <img className="Contact-img" src={avatar} alt={name}/>
            {name}
        </div>
    )
}

export default Contact
