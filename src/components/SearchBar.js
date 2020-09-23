import React, {useState} from 'react';

const SearchBar = ({currentPage, setSearchValue}) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchValue(search);
    };

    return(
        <div className='search-bar'>
            <form>
                <input type='text' placeholder={`Search news in ${currentPage}...`} value={search} onChange={handleChange} />
                <button onClick={handleSubmit}>Search</button>
            </form>
        </div>
    )
};

export default SearchBar;