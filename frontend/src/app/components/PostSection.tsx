import React from 'react';
import PostMaker from './PostMaker';
import Post from './Post';

const PostSection: React.FC = (): JSX.Element => {
    return (
        <React.Fragment>
            <PostMaker />
            <Post />
            <Post />
        </React.Fragment>
    )
}

export default PostSection;