import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import {APIKEY} from '../helpers/constants';
import Card from './Card';
import NotFound from './NotFound';

const Category = ({currentPage, setPageNotFound, pageNotFound}) => {
    const [posts, setPosts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        setPageNotFound(false);
        setPosts([]);
        setIsFetched(false);
        const fetchPosts = async () => {
            const fetchData = await fetch(`https://newsapi.org/v2/top-headlines?q=${searchValue}&category=${currentPage}&apiKey=${APIKEY}&page=${page}`).then(res => res.json());
            if(fetchData.status === 'ok') {
                if(fetchData.totalResults === 0) {
                    setPageNotFound(true);
                } else {
                    setIsFetched(true);
                    setPosts(fetchData.articles);
                    setTotalResults(fetchData.totalResults);
                }
            }
        }

        fetchPosts();
    },[currentPage, searchValue, page, setPageNotFound]);


    return (
        <div className='posts-container'>
            {!pageNotFound ? <><SearchBar currentPage={currentPage} setSearchValue={setSearchValue} />
            <Pagination page={page} setPage={setPage} totalResults={totalResults} />
            {isFetched ? <div className='posts'>
                {posts.map((post, index) => <Card key={post.title} post={post} />)}
            </div> : <span className='loading-posts'>Wait!! Loading posts...</span>}</> : <NotFound />}
        </div>
    )
};

export default Category;