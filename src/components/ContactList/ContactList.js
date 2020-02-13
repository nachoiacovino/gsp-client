import React, { useState, useEffect } from 'react'
import './ContactList.css'
import NavButtons from '../NavButtons/NavButtons'

const ContactList = ({ contacts }) => {
    const [listContacts, setListContacts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const contactsPerPage = 50
    const totalPages = Math.floor(contacts.length / contactsPerPage)

    useEffect(() => {
        if (currentPage === 1) setListContacts(contacts.slice(0, contactsPerPage))
        else setListContacts(contacts.slice(currentPage * contactsPerPage - contactsPerPage, currentPage * contactsPerPage))
    }, [currentPage, contacts])

    return (
        <div className="ContactList">
            <div className="ContactList-contacts">
                {listContacts.map(({ id, name }) => 
                    <div key={id} className="ContactList-contact">{name}</div>
                )}
            </div>
            <NavButtons currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
    )
}

export default ContactList
