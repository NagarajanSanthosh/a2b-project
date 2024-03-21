import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/Search.css';

const Search = () => {
    return (
        <div className='input-wrapper'>
            <input
                className='rounded'
                type='text'
                placeholder='Search'
            />
            <FaSearch className='search-icon' />
        </div>
    );
};

export default Search;
