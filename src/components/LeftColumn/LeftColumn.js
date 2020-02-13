import React, { useState, useEffect } from 'react'
import './LeftColumn.css'
import SearchBar from '../SearchBar/SearchBar'
import LetterFilter from '../LetterFilter/LetterFilter'
import ContactList from '../ContactList/ContactList'
import useInputState from '../../hooks/useInputState'

const LeftColumn = ({ contacts, selectContact }) => {
    const [leftContacts, setLeftContacts] = useState([])
    const [search, setSearch, resetSearch] = useInputState("")

    useEffect(() => setLeftContacts(contacts), [contacts])
    
    const filterByLetter = letter => {
        setLeftContacts(contacts.filter(contact => contact.name[0] === letter))
    }

    useEffect(() => {
        setLeftContacts(
            contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()))
        )
    }, [contacts, search])

    const handleSubmit = e => {
        e.preventDefault()
        selectContact(leftContacts[0].id)
        resetSearch()
    }

    return (
        <div className="LeftColumn">
            <div className="LeftColumn-search">
                <SearchBar leftColumn search={search} setSearch={setSearch} handleSubmit={handleSubmit} />
            </div>
            <div className="LeftColumn-flex">
                <LetterFilter filterByLetter={filterByLetter} />
                <ContactList contacts={leftContacts} selectContact={selectContact} />
            </div>
        </div>
    )
}

export default LeftColumn
