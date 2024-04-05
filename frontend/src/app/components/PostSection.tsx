import React from 'react';
import PostMaker from './PostMaker';
import Post from './Post';

const PostSection = () => {
    return (
        <React.Fragment>
            <PostMaker />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </React.Fragment>
    )
}

export default PostSection;