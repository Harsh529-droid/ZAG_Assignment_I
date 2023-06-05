import React from 'react';
import '../style.scss'
import filter from '../assets/filter.png'

const SearchBar = () => {

    return (
        <div className="SearchBar">
            
            <input type="text" placeholder='type a message'/>
            <div className='btn'>
                <img src={filter} alt="" />
            </div>

        </div>
    );
};

export default SearchBar;
