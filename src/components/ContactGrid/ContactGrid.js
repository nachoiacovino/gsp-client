import React, { useState, useEffect } from 'react'
import Contact from '../Contact/Contact'
import './ContactGrid.css'
import NavButtons from '../NavButtons/NavButtons'

const ContactGrid = ({ contacts, selectedContact }) => {
    const [filteredContacts, setFilteredContacts] = useState([])
    const [gridContacts, setGridContacts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const contactsPerPage = 20
    const totalPages = Math.floor(contacts.length / contactsPerPage)

    

    useEffect(() => {
        const filterContacts = arr => {
            const result = []
            for (let i = 0; i < contacts.length; i++) {
                if (arr.includes(contacts[i].id)) result.push(contacts[i])
            }
            return result
        }
        selectedContact && setFilteredContacts(filterContacts(selectedContact.connections))
    }, [contacts, selectedContact])

    useEffect(() => {
        if (currentPage === 1) setGridContacts(filteredContacts.slice(0, contactsPerPage))
        else setGridContacts(filteredContacts.slice(currentPage * contactsPerPage - contactsPerPage, currentPage * contactsPerPage))
    }, [currentPage, filteredContacts])

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
