import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import LetterFilter from '../LetterFilter/LetterFilter'
import ContactList from '../ContactList/ContactList'
import './LeftColumn.css'

const LeftColumn = ({ contacts, selectContact }) => {
    return (
        <div className="LeftColumn">
            <div className="LeftColumn-search">
                <SearchBar leftColumn />
            </div>
            <div className="LeftColumn-flex">
                <LetterFilter />
                <ContactList contacts={contacts} selectContact={selectContact} />
            </div>
        </div>
    )
}

export default LeftColumn
