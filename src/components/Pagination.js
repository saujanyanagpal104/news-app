import React, { useState, useEffect } from 'react';

const Pagination = ({page, setPage, totalResults}) => {
    const [disablePrevPagination, setDisablePrevPagination] = useState(true);
    const [disableNextPagination, setDisableNextPagination] = useState(false);

    useEffect(() => {
        if(page === 1) {
            setDisablePrevPagination(true);
        } else if(page === Math.ceil(totalResults/20)) {
            setDisableNextPagination(true);
        }
    }, [page, totalResults]);
    
    const previousPage = () => {
        if(page >= 2) {
            setPage(page - 1);
            setDisableNextPagination(false)
        }
    };

    const nextPage = () => {
        if(page < totalResults) {
            setPage(page + 1);
            setDisablePrevPagination(false);
        }
    }


    return(
        <div className='pagination'>
            <span className={`prev-pagination-block ${disablePrevPagination ? 'disable-pagination' : 'active-pagination'}`} onClick={previousPage}>Prev</span>
            <span className={`next-pagination-block ${disableNextPagination ? 'disable-pagination' : 'active-pagination'}`} onClick={nextPage}>Next</span>
        </div>
    )
}

export default Pagination;