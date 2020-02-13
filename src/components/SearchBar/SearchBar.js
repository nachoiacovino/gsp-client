import React from 'react'
import './SearchBar.css'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'

const SearchBar = ({ leftColumn, search, setSearch, handleSubmit }) => {
    return (
        <div className="SearchBar">
            <SearchIcon className="SearchBar-icon" />
            <form onSubmit={handleSubmit}>
                <input className={`SearchBar-input ${leftColumn && "leftColumn"}`} type="text" onChange={setSearch} value={search} placeholder="Search..." />
            </form>
        </div>
    )
}

export default SearchBar
