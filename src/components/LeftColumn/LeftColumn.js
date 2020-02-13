import React, { useState, useEffect } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import LetterFilter from '../LetterFilter/LetterFilter'
import ContactList from '../ContactList/ContactList'
import './LeftColumn.css'

const LeftColumn = ({ contacts, selectContact }) => {
    const [leftContacts, setLeftContacts] = useState([])

    useEffect(() => setLeftContacts(contacts), [contacts])

    const filterByLetter = letter => {
        setLeftContacts(contacts.filter(contact => contact["name"][0] === letter))
    }

    return (
        <div className="LeftColumn">
            <div className="LeftColumn-search">
                <SearchBar leftColumn />
            </div>
            <div className="LeftColumn-flex">
                <LetterFilter filterByLetter={filterByLetter} />
                <ContactList contacts={leftContacts} selectContact={selectContact} />
            </div>
        </div>
    )
}

export default LeftColumn
