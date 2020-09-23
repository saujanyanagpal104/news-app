import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import Card from './Card';

const Category = ({currentPage, setPageNotFound}) => {
    const [posts, setPosts] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [isFetched, setIsFetched] = useState(false);

    useEffect(() => {
        setPosts([]);
        setIsFetched(false);
        const fetchPosts = async () => {
            const fetchData = await fetch(`https://newsapi.org/v2/top-headlines?q=${searchValue}&category=${currentPage}&apiKey=ab07251c9d8648c59e380f1734da1d10&page=${page}`).then(res => res.json());
            if(fetchData.status === 'ok') {
                setIsFetched(true);
                setPosts(fetchData.articles);
                setTotalResults(fetchData.totalResults)
            }
        }

        fetchPosts();
    },[currentPage, searchValue, page]);


    return (
        <div className='posts-container'>
            <SearchBar currentPage={currentPage} setSearchValue={setSearchValue} />
            <Pagination page={page} setPage={setPage} totalResults={totalResults} />
            {isFetched ? <div className='posts'>
                {posts.map((post, index) => <Card key={post.title} post={post} />)}
            </div> : <span className='loading-posts'>Wait!! Loading posts...</span>}
        </div>
    )
};

export default Category;