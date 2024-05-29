import React from 'react'
import PostItem from './PostItem';

const PostList = ({ posts }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>ПОСТЫ</h1>
            {posts.map(post =>
                <div>
                    <PostItem post={post} key={post.id} />
                </div>
            )}
        </div>
    )
}

export default PostList;