import React, { useState, useEffect } from 'react'
import './ContactList.css'
import NavButtons from '../NavButtons/NavButtons'

const ContactList = ({ listContacts, setListContacts }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const contactsPerPage = 50

    useEffect(() => {
        // if (currentPage === 1) setListContacts(listContacts.slice(0, contactsPerPage))
        // else 
        setListContacts(listContacts.slice(currentPage * contactsPerPage - contactsPerPage, currentPage * contactsPerPage))
    }, [currentPage, setListContacts])

    const [totalPages, setTotalPages] = useState(10)
    // const totalPages = Math.floor(listContacts.length / contactsPerPage)

    useEffect(() => {
        if (listContacts.length > 0) setTotalPages(Math.floor(listContacts.length / contactsPerPage))
    }, [listContacts])
    
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
