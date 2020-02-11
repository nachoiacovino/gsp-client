import React from 'react'
import './Contacts.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import Contact from '../../components/Contact/Contact'

const Contacts = ({ contacts }) => {
    return (
        <div>
            <SearchBar />
            <Contact />
        </div>
    )
}

export default Contacts
