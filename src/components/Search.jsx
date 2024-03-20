import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Search.css'; // Import CSS file for styling

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
