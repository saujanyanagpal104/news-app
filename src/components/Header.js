import React from 'react';
import {CATEGORIES} from '../helpers/constants';
import { Link } from 'react-router-dom';

const Header = ({currentPage}) => {
    return (
        <div className='header'>
            {CATEGORIES.map((category) => <Link className={`${currentPage === category.toLowerCase() ? 'active-tab' : ''}`} key={category} to={`/${category.toLowerCase()}`}><span className='category'>{category}</span></Link>)}
        </div>
    )
}

export default Header;