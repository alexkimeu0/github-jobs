import React from 'react'
import SearchIcon from '@material-ui/icons/Search'

import './Search.css'

const Search = () => {
    return (
        <div className="search">
            <input type="text" className="search__input" placeholder="Search Job..." />
            <SearchIcon className="search__icon" />
        </div>
    )
}

export default Search
