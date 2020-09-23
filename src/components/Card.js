import React, { useState } from 'react';

const Card = ({post}) => {
    const [likes, setLikes] = useState(parseInt(localStorage.getItem(`likes-${post.title}`)) || 0);
    const [hideElement, setHideElement] = useState(localStorage.getItem(`hideItem-${post.title}`) || false);

    const addLikes = (e) => {
        e.stopPropagation();
        localStorage.setItem(`likes-${post.title}`, likes + 1);
        setLikes(likes + 1);
    };

    const hideCard = (e) => {
        e.stopPropagation();
        localStorage.setItem(`hideItem-${post.title}`, true);
        setHideElement(true);
    }

    return (
        <div className={`post ${hideElement || hideElement === 'true' ? 'hide-card': ''}`} onClick={() =>  window.open(post.url, '_blank', 'noopener noreferrer')}>
            <div className='post-details'>
                <div className='post-image'>
                    <img src={post.urlToImage} alt={post.title} />
                </div>
                <span className='post-title'>{post.title}</span>
                <span className='post-author'>-{post.author ? post.author : 'Unknown'}</span>
            </div>
            <div className='buttons-and-date-published'>
            <div className='post-buttons'>
                    <span className='like-button' onClick={addLikes}>Like({likes})</span>
                    <span className='hide-button' onClick={hideCard}>Hide</span>
            </div>
            <span className='post-publish'>Published At: {post.publishedAt}</span>
            </div>
        </div>
    )
}

export default Card;