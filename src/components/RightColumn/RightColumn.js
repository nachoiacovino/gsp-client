import React, { useState, useEffect } from 'react'
import './RightColumn.css'
import ContactGrid from '../ContactGrid/ContactGrid'
import Header from '../Header/Header'

const RightColumn = ({ contacts, selectedContact }) => {
    const [filteredContacts, setFilteredContacts] = useState([])

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

    return (
        <div className="RightColumn">
            <Header selectedContact={selectedContact} />
            <ContactGrid filteredContacts={filteredContacts} />
        </div>
    )
}

export default RightColumn
