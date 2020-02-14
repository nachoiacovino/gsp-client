import React, { useState, useEffect } from 'react'
import './RightColumn.css'
import ContactGrid from '../ContactGrid/ContactGrid'
import Header from '../Header/Header'

const RightColumn = ({ contacts, selectContact, selectedContact }) => {
    const [filteredContacts, setFilteredContacts] = useState([])
    const [searchContacts, setSearchContacts] = useState([])

    useEffect(() => {
        const filterContacts = arr => {
            const result = []
            for (let i = 0; i < contacts.length; i++) {
                if (arr.includes(contacts[i].id)) result.push(contacts[i])
            }
            return result
        }
        if (selectedContact) {
            setFilteredContacts(filterContacts(selectedContact.connections))
            setSearchContacts(filterContacts(selectedContact.connections))
        }
    }, [contacts, selectedContact])

    return (
        <div className="RightColumn">
            <Header 
                selectContact={selectContact} 
                selectedContact={selectedContact} 
                searchContacts={searchContacts} 
                filteredContacts={filteredContacts} 
                setFilteredContacts={setFilteredContacts} 
            />
            <ContactGrid selectContact={selectContact} filteredContacts={filteredContacts} />
        </div>
    )
}

export default RightColumn
