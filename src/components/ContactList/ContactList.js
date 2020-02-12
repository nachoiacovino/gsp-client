import React from 'react'
import './ContactList.css'
import NavButtons from '../NavButtons/NavButtons'

const ContactList = () => {
    return (
        <div className="ContactList">
            <div className="ContactList-contacts">
                <div className="ContactList-contact">Tomas Mercado</div>
                <div className="ContactList-contact">Tomas Mercado</div>
                <div className="ContactList-contact">Tomas Mercado</div>
                <div className="ContactList-contact">Tomas Mercado</div>
                <div className="ContactList-contact">Tomas Mercado</div>
                <div className="ContactList-contact">Tomas Mercado</div>
                <div className="ContactList-contact">Tomas Mercado</div>
                <div className="ContactList-contact">Tomas Mercado</div>
                <div className="ContactList-contact">Tomas Mercado</div>
            </div>
            <NavButtons />
        </div>
    )
}

export default ContactList
