import React, { useState, useEffect } from 'react'
import Contact from '../Contact/Contact'
import './ContactGrid.css'
import NavButtons from '../NavButtons/NavButtons'

const ContactGrid = ({ filteredContacts }) => {
    const [gridContacts, setGridContacts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const contactsPerPage = 20
    const [totalPages, setTotalPages] = useState(0)

    useEffect(() => {
        setTotalPages(Math.ceil(filteredContacts.length / contactsPerPage))
    }, [filteredContacts])

    useEffect(() => {
        if (currentPage === 1) setGridContacts(filteredContacts.slice(0, contactsPerPage))
        else setGridContacts(filteredContacts.slice(currentPage * contactsPerPage - contactsPerPage, currentPage * contactsPerPage))
    }, [currentPage, filteredContacts])

    useEffect(() => setCurrentPage(1), [filteredContacts])

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
