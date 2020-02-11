import React from 'react'
import './SearchBar.css'
import useInputState from '../../hooks/useInputState'
import { ReactComponent as SearchIcon } from '../../assets/svg/search.svg'

const SearchBar = () => {
    const [search, setSearch] = useInputState("")

    return (
        <div className="SearchBar">
            <SearchIcon className="SearchBar-icon" />
            <input className="SearchBar-input" type="text" onChange={setSearch} value={search} placeholder="Search..." />
        </div>
    )
}

export default SearchBar
