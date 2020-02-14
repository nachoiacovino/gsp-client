import React, { useEffect } from 'react'
import './Header.css'
import SearchBar from '../SearchBar/SearchBar'
import useInputState from '../../hooks/useInputState'


const Header = ({ selectContact, selectedContact, searchContacts, filteredContacts, setFilteredContacts }) => {
    const [search, setSearch, resetSearch] = useInputState("")

    useEffect(() => {
        setFilteredContacts(
            searchContacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()))
        )
    }, [search, searchContacts, setFilteredContacts])

    const handleSubmit = e => {
        e.preventDefault()
        if (filteredContacts[0]) selectContact(filteredContacts[0].id)
        resetSearch()
    }

    return (
        <div className="Header">
            {selectedContact && 
                <div className="Header-contact">
                        <img className="Header-img" src={selectedContact.avatar} alt=""/>
                        <h1 className="Header-name">
                            {selectedContact.name}
                        </h1>
                </div>
            }
            <div className="Header-search">
                <SearchBar search={search} setSearch={setSearch} handleSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default Header
