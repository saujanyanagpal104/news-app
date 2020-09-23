import React, { useState } from 'react';
import Header from './Header';
import Category from './Category';
import NotFound from './NotFound';

const App = (props) => {
    const [pageNotFound, setPageNotFound] = useState(false);

    const urlParams = props.match.params.category;

    return (
        <div className='container'>
            <Header currentPage={urlParams} />
            {!pageNotFound ? <Category currentPage={urlParams} setPageNotFound={setPageNotFound} /> : <NotFound /> }
        </div>
    )
};

export default App;



// 5dbf1323623040ff9282c9c276090fe7c