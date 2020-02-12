import React from 'react'
import './Contacts.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import LetterFilter from '../../components/LetterFilter/LetterFilter'
import './Contacts.css'
import ContactGrid from '../../components/ContactGrid/ContactGrid'
import ContactList from '../../components/ContactList/ContactList'
import LeftColumn from '../../components/LeftColumn/LeftColumn'

const Contacts = ({ contacts }) => {
    return (
        <div className="Contacts">
            {/* <SearchBar />
            <LetterFilter />
            <ContactList /> */}
            <LeftColumn />
            <ContactGrid />
        </div>
    )
}

export default Contacts
