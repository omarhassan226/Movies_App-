import React from 'react';
import './search.css';

const Search = () => {
    return (
        <div>
            <input
                className="inputStyle"
                type="text"
                placeholder='Search movies...'
            />
        </div>
    );
}

export default Search;
