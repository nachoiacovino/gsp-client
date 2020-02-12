import React, { useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import LetterFilter from '../LetterFilter/LetterFilter'
import ContactList from '../ContactList/ContactList'
import './LeftColumn.css'

const LeftColumn = ({ contacts }) => {
    const [listContacts, setListContacts] = useState([])
    return (
        <div className="LeftColumn">
            <div className="LeftColumn-search">
                <SearchBar leftColumn />
            </div>
            <div className="LeftColumn-flex">
                <LetterFilter contacts={contacts} />
                <ContactList listContacts={listContacts} setListContacts={setListContacts} />
            </div>
        </div>
    )
}

export default LeftColumn
