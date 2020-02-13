import React, { useState, useEffect } from 'react'
import Contact from '../Contact/Contact'
import './ContactGrid.css'
import NavButtons from '../NavButtons/NavButtons'

const ContactGrid = ({ contacts }) => {
    const [gridContacts, setGridContacts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const contactsPerPage = 20
    const totalPages = Math.floor(contacts.length / contactsPerPage)

    useEffect(() => {
        if (currentPage === 1) setGridContacts(contacts.slice(0, contactsPerPage))
        else setGridContacts(contacts.slice(currentPage * contactsPerPage - contactsPerPage, currentPage * contactsPerPage))
    }, [currentPage, contacts])

    return (
        <div className="ContactGrid">
            <div className="ContactGrid-grid">
                {gridContacts.map(({ id, name, avatar }) => 
                        <Contact key={id} name={name} avatar={avatar} />
                )}
            </div>
            <NavButtons currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div>
    )
}

export default ContactGrid
