import React from 'react'
import './Contact.css'

const Contact = ({ name, avatar, selectContact }) => {
    return (
        <div onClick={selectContact} className="Contact">
            <img className="Contact-img" src={avatar} alt={name}/>
            {name}
        </div>
    )
}

export default Contact
